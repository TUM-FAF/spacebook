import { DateTime } from 'luxon';
import { Dispatch, Reducer, ReducerState, useEffect, useReducer } from 'react'; 
import InfiniteScroll from 'react-infinite-scroll-component';
import {DayCard, Header } from '../../components';
import { IDayPicture, IMainState, initialState, mainActions, MainActionType, mainReducer } from '../../store';
import * as s from './MainPage.styled';
import React from 'react';

const PICTURES_TO_FETCH: number = 2;

export const MainPage: React.FC = (): React.ReactElement => {
  const [state, dispatch]: [
    ReducerState<Reducer<IMainState, MainActionType>>,
    Dispatch<MainActionType>
  ] = useReducer(mainReducer, initialState);

  const API_KEYS: string[] = [
    'fCge8jp6Kn9qJ3c8CdIHKGBPfG4dGzYqmMzGpo9z',
    '5wJA3icfv8nK73LTDJvrtE3kYM5tMRBwYIZxdl7e',
    'XoaHgKExwK6bjYd1BbchJpib1PoslxNma7aXIcVe',
    'NxgnY8Mudi14Z6zuwg8RirUWHoxkU51KP46mJZA7',
    'RXKW6gmsO16zEBigThXE9RhsoYWDCyhY0o0ZWie0',
    'MCVi30DjnwG4oKa4a5QAzU9HjgITrHAqJPTDzzk6',
    'PhzLpPfsldCXdtJLbMoLrktZKno0hibGCQc3KM70',
    'axuUMf6rO10GZyaKjR5hRJdqo5MeUV6uIJwKRivc',
    'LtrdVP7MA8rcvJ8pNUPRKklKkgxeQo6bLKaerAKW',
    'rlCkluhZENDgIKc6VORsuBI1nf848enHc8a9OMoe',
    'kMSvVy4oYfXhiQxTI5axb91i0LdOE209ao3FitVa',
  ];

  const getURL: (urlDate: string) => string = (urlDate: string): string =>
    `https://api.nasa.gov/planetary/apod?api_key=${
      API_KEYS[Math.floor(Math.random() * API_KEYS.length)]
    }&date=${urlDate}`;

  async function getImagePromise(url: string): Promise<IDayPicture> {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`API request failed with status: ${res.status}`);
      }
      return res.json();
    } catch (error) {
      console.error("Error fetching image:", error);
      dispatch(mainActions.changeError(error instanceof Error ? error : new Error(String(error))));
      throw error;
    }
  }

  async function getLastNImages(startDate: DateTime, n: number): Promise<IDayPicture[]> {
    try {
      const imagesPromise: Array<Promise<IDayPicture>> = [];
      for (let i: number = 0; i < n; i++) {
        const dateStr: string = startDate
          .minus({ days: i })
          .toFormat('yyyy-LL-dd')
          .toString();
        const url: string = getURL(dateStr);
        imagesPromise.push(getImagePromise(url));
      }
      const imagesArray: IDayPicture[] = await Promise.all(imagesPromise);
      return imagesArray;
    } catch (error) {
      console.error("Error getting images:", error);
      dispatch(mainActions.changeError(error instanceof Error ? error : new Error(String(error))));
      return [];
    }
  }

  const [isLoading, setIsLoading] = React.useState(false);

  async function loadMoreImages(): Promise<void> {
    if (isLoading || state.error) return;
    
    try {
      setIsLoading(true);
      console.log("Loading more images from date:", state.requestDate.toFormat('yyyy-LL-dd'));
      
      const images: IDayPicture[] = await getLastNImages(state.requestDate, PICTURES_TO_FETCH);
      if (images.length > 0) {
        dispatch(mainActions.addPictures(images));
        dispatch(mainActions.updateRequestDate(state.requestDate.minus({ days: PICTURES_TO_FETCH })));
      }
    } catch (error) {
      console.error("Failed to load more images:", error);
    } finally {
      setIsLoading(false);
    }
  }
  
  useEffect(() => {
    loadMoreImages();
  }, []);
  
  return (
    <s.Container>
      <Header />
      {/* <Banner /> */}
      {state.error ? (
        <s.ErrorMessage>
          Sorry. <br /> Too many requests or API error. <br /> Try again later...
        </s.ErrorMessage>
      ) : (
        <div>
          {state.dayPictures.length === 0 && isLoading ? (
            <div style={{fontSize: '1.2rem', textAlign: 'center', margin: '2rem 0', color: '#4dabf7'}}>
              Loading images...
            </div>
          ) : (
            <InfiniteScroll
              dataLength={state.dayPictures.length}
              next={loadMoreImages}
              hasMore={true}
              loader={
                <div style={{fontSize: '1.2rem', textAlign: 'center', margin: '2rem 0', color: '#4dabf7'}} key="loading">
                  Loading more images...
                </div>
              }
              endMessage={
                <div style={{fontSize: '1.2rem', textAlign: 'center', margin: '2rem 0', color: '#868e96'}}>
                  You've seen all available images!
                </div>
              }
              scrollThreshold={0.9}
            >
              {state.dayPictures.map((dayPicture: IDayPicture, index: number) => (
                <DayCard dayPicture={dayPicture} key={`${dayPicture.date}-${index}`} />
              ))}
            </InfiniteScroll>
          )}
        </div>
      )}
    </s.Container>
  );
};
