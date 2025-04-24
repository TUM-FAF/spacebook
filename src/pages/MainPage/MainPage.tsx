import { DateTime } from 'luxon';
import React, { useReducer, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { DayCard, Header } from '../../components';
import { IDayPicture, initialState, mainActions,  mainReducer } from '../../store';
import * as s from './MainPage.styled';

const PICTURES_TO_FETCH: number = 2; 
const RETRY_DELAY: number = 1000; 

export const MainPage: React.FC = (): React.ReactElement => {
  const [state, dispatch] = useReducer(mainReducer, {
    ...initialState,
    // Start with yesterday's date to avoid requesting future dates
    requestDate: DateTime.local().minus({ days: 1 })
  });
  const [isLoading, setIsLoading] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

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

  const [currentKeyIndex, setCurrentKeyIndex] = useState(0);

  const isDateInFuture = (date: DateTime): boolean => {
    return date > DateTime.local();
  };

  const getSafeDate = (date: DateTime): DateTime => {
    return isDateInFuture(date) ? DateTime.local().minus({ days: 1 }) : date;
  };

  const getURL = (urlDate: string): string => {
    return `https://api.nasa.gov/planetary/apod?api_key=${API_KEYS[currentKeyIndex]}&date=${urlDate}`;
  };

  const rotateApiKey = () => {
    setCurrentKeyIndex((prevIndex) => (prevIndex + 1) % API_KEYS.length);
  };

  async function getImagePromise(url: string): Promise<IDayPicture> {
    try {
      const res = await fetch(url);
      
      if (res.status === 429) { // Too many requests
        console.log("Rate limit hit, rotating API key");
        rotateApiKey();
        throw new Error("Rate limit exceeded");
      }
      
      if (!res.ok) {
        throw new Error(`API request failed with status: ${res.status}`);
      }
      
      return res.json();
    } catch (error) {
      console.error("Error fetching image:", error);
      throw error;
    }
  }

  async function getImage(dateStr: string): Promise<IDayPicture | null> {
    try {
      const url = getURL(dateStr);
      return await getImagePromise(url);
    } catch (error) {
      console.error(`Failed to get image for date ${dateStr}:`, error);
      return null;
    }
  }

  async function loadMoreImages(): Promise<void> {
    if (isLoading) return;
    
    try {
      setIsLoading(true);
      
      let currentDate = getSafeDate(state.requestDate);
      
      console.log("Loading more images from date:", currentDate.toFormat('yyyy-LL-dd'));
      
      const newImages: IDayPicture[] = [];
      let fetchedCount = 0;
      let errorOccurred = false;
      
      for (let i = 0; i < PICTURES_TO_FETCH; i++) {
        const dateStr = currentDate.toFormat('yyyy-LL-dd');
        
        try {
          const image = await getImage(dateStr);
          
          if (image) {
            newImages.push(image);
            fetchedCount++;
          
            currentDate = currentDate.minus({ days: 1 });
          } else {
            errorOccurred = true;
            break;
          }
        } catch (error) {
          errorOccurred = true;
          break;
        }
      }
      
      if (fetchedCount > 0) {
        dispatch(mainActions.addPictures(newImages));
        dispatch(mainActions.updateRequestDate(currentDate));
        setRetryCount(0); 
      }
      
      if (errorOccurred) {
        if (retryCount < API_KEYS.length) {
          console.log(`Retrying with a different API key (attempt ${retryCount + 1})`);
          setRetryCount(prev => prev + 1);
          rotateApiKey();
          
          setTimeout(() => {
            setIsLoading(false); 
          }, RETRY_DELAY);
          return;
        } else {
          dispatch(mainActions.changeError(new Error("Failed after trying all API keys")));
        }
      }
    } catch (error) {
      console.error("Failed to load more images:", error);
      dispatch(mainActions.changeError(error instanceof Error ? error : new Error(String(error))));
    } finally {
      setIsLoading(false);
    }
  }
  
  const handleRetry = () => {
    dispatch(mainActions.changeError(null));
    setRetryCount(0);
    dispatch(mainActions.updateRequestDate(DateTime.local().minus({ days: 1 })));
    loadMoreImages();
  };
  
  useEffect(() => {
    loadMoreImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <s.Container>
      <Header />
      {state.error ? (
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <div style={{ fontSize: '1.5rem', color: '#ff6b6b', marginBottom: '1rem' }}>
            Sorry. <br /> Too many API requests. <br /> Try again later...
          </div>
          <button 
            onClick={handleRetry} 
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#4dabf7',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Retry with different API key
          </button>
        </div>
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