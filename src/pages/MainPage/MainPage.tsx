import { DateTime } from 'luxon';
import React, { useReducer, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { DayCard, Header } from '../../components';
import { IDayPicture, initialState, mainActions, mainReducer } from '../../store';
import { useTheme } from '../../components/ThemeContext';

const PICTURES_TO_FETCH = 9; // Increased for desktop view
const RETRY_DELAY = 1000;

export const MainPage: React.FC = (): React.ReactElement => {
  const [state, dispatch] = useReducer(mainReducer, {
    ...initialState,
    // Start with yesterday's date to avoid requesting future dates
    requestDate: DateTime.local().minus({ days: 1 }),
  });
  const [isLoading, setIsLoading] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const { theme } = useTheme();
  
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

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

      if (res.status === 429) {
        // Too many requests
        console.log('Rate limit hit, rotating API key');
        rotateApiKey();
        throw new Error('Rate limit exceeded');
      }

      if (!res.ok) {
        throw new Error(`API request failed with status: ${res.status}`);
      }

      return res.json() as Promise<IDayPicture>;
    } catch (error) {
      console.error('Error fetching image:', error);
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

      console.log('Loading more images from date:', currentDate.toFormat('yyyy-LL-dd'));

      const newImages: IDayPicture[] = [];
      let fetchedCount = 0;
      let errorOccurred = false;

      // Fetch more images at once for desktop view
      const fetchCount = isDesktop ? PICTURES_TO_FETCH : 2;

      for (let i = 0; i < fetchCount; i++) {
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
        } catch {
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
          setRetryCount((prev) => prev + 1);
          rotateApiKey();

          setTimeout(() => {
            setIsLoading(false);
          }, RETRY_DELAY);
          return;
        } else {
          dispatch(mainActions.changeError(new Error('Failed after trying all API keys')));
        }
      }
    } catch (error) {
      console.error('Failed to load more images:', error);
      dispatch(mainActions.changeError(error instanceof Error ? error : new Error(String(error))));
    } finally {
      setIsLoading(false);
    }
  }

  const handleRetry = () => {
    dispatch(mainActions.changeError(null));
    setRetryCount(0);
    dispatch(mainActions.updateRequestDate(DateTime.local().minus({ days: 1 })));
    void loadMoreImages();
  };

  useEffect(() => {
    void loadMoreImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`font-ibm ${isDesktop ? 'max-w-full px-16' : 'max-w-[375px] min-w-[375px]'}`}>
      <Header/>
      {state.error ? (
        <div className='font-ibm text-center my-8'>
          <p className='text-theme text-center text-lg'>
            Sorry. <br /> Too many API requests. <br /> Try again later...
          </p>
          <button className='text-theme text-center cursor-pointer mt-4 border border-theme px-4 py-2 hover:bg-theme hover:bg-opacity-10' 
            onClick={handleRetry}
          >
            Retry with different API key
          </button>
        </div>
      ) : (
        <div>
          {state.dayPictures.length === 0 && isLoading ? (
            <p className='text-theme text-center cursor-pointer my-8 text-lg'>
              Loading images...
            </p>
          ) : (
            <div>
              {isDesktop && state.dayPictures.length > 0 && (
                // Featured image banner (first/latest image)
                <DayCard 
                  dayPicture={state.dayPictures[0]} 
                  isFeatured={true} 
                  previousImages={state.dayPictures.slice(1)}
                />
              )}
              
              {!isDesktop && (
                // Mobile view with infinite scroll
                <InfiniteScroll
                  dataLength={state.dayPictures.length}
                  next={loadMoreImages}
                  hasMore={true}
                  loader={
                    <div
                      className='text-theme text-center mb-2 mt-5'
                      key="loading"
                    >
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
              
              {isDesktop && isLoading && (
                <div className='text-theme text-center my-8'>
                  Loading more images...
                </div>
              )}
              
              {isDesktop && !isLoading && state.dayPictures.length > 0 && (
                <div className="mt-8 text-center">
                  <button 
                    onClick={() => loadMoreImages()}
                    className="text-theme  px-6 py-2 hover:bg-theme hover:bg-opacity-10"
                  >
                    Load More Images
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};