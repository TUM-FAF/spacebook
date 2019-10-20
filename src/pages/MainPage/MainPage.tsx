import { DateTime } from 'luxon';
import React, { Dispatch, Reducer, ReducerAction, ReducerState, useReducer } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { Banner, DayCard, Header } from '../../components';
import { IDayPicture, IMainState, initialState, mainActions, MainActionType, mainReducer } from '../../store';
import * as s from './MainPage.styled';

const PICTURES_TO_FETCH: number = 2;

export const MainPage: React.FC = (): React.ReactElement => {
  const [state, dispatch]: [
    ReducerState<Reducer<IMainState, MainActionType>>,
    Dispatch<ReducerAction<Reducer<IMainState, MainActionType>>>
  ] = useReducer(mainReducer, initialState);

  const API_KEY: string = 'fCge8jp6Kn9qJ3c8CdIHKGBPfG4dGzYqmMzGpo9z';
  const getURL: (urlDate: string) => string = (urlDate: string): string =>
    `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${urlDate}`;

  async function getImagePromise(url: string): Promise<IDayPicture> {
    return fetch(url)
      .then((res: Response) => res.json())
      .catch((reason: any) => dispatch(mainActions.changeError(new Error(reason))));
  }

  async function getLastNImages(startDate: DateTime, n: number): Promise<IDayPicture[]> {
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
  }

  async function loadFunc(): Promise<void> {
    const images: IDayPicture[] = await getLastNImages(state.requestDate, PICTURES_TO_FETCH);
    dispatch(mainActions.updateRequestDate(state.requestDate.minus({ days: PICTURES_TO_FETCH })));
    dispatch(mainActions.addPictures(images));
  }

  return (
    <s.Container>
      <Header />
      <Banner />
      {state.error ? (
        <s.ErrorMessage>
          Sorry. <br /> Too many requests. <br /> Try again later...
        </s.ErrorMessage>
      ) : (
        <InfiniteScroll
          pageStart={0}
          loadMore={loadFunc}
          hasMore={true || false}
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }
        >
          {state.dayPictures.map((dayPicture: IDayPicture, index: number) => {
            return <DayCard dayPicture={dayPicture} key={dayPicture.title + index} />;
          })}
        </InfiniteScroll>
      )}
    </s.Container>
  );
};
