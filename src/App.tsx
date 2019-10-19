import { DateTime } from 'luxon';
import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import './App.css';

interface IDayImage {
  date: string;
  explanation: string;
  url: string;
  title: string;
  copyright?: string;
}

const App: React.FC = (): React.ReactElement => {
  const [items, setItems]: [IDayImage[], React.Dispatch<React.SetStateAction<IDayImage[]>>] = useState<IDayImage[]>([]);
  const [date, setDate]: [DateTime, React.Dispatch<React.SetStateAction<DateTime>>] = useState<DateTime>(
    DateTime.local()
  );

  const API_KEY: string = '1Hdx0DbpspSgdXGWxzf0hWbJfqEHEPRzwyIbP2Se';
  const getURL: (urlDate: string) => string = (urlDate: string): string =>
    `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${urlDate}`;

  async function getImagePromise(url: string): Promise<IDayImage> {
    return fetch(url).then((res: Response) => res.json());
  }

  async function getLastNImages(startDate: DateTime, n: number): Promise<IDayImage[]> {
    const imagesPromise: Array<Promise<IDayImage>> = [];
    for (let i: number = 0; i < n; i++) {
      const dateStr: string = startDate
        .minus({ days: i })
        .toFormat('yyyy-LL-dd')
        .toString();
      const url: string = getURL(dateStr);
      imagesPromise.push(getImagePromise(url));
    }
    const imagesArray: IDayImage[] = await Promise.all(imagesPromise);
    return imagesArray;
  }

  async function loadFunc(): Promise<void> {
    const images: IDayImage[] = await getLastNImages(date, 2);
    setDate(date.minus({ days: 2 }));
    setItems(items.concat(images));
  }

  return (
    <div className="App">
      Spacebook
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
        {items.map((imageObject: IDayImage) => (
          <img src={imageObject.url} key={imageObject.date} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default App;
