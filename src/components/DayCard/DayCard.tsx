import { DateTime } from 'luxon';
import React, { useState, useEffect } from 'react';
import { IDayPicture, INoPicture, isDayPicture } from '../../store';

interface IProps {
  dayPicture: IDayPicture | INoPicture;
  isFeatured?: boolean;
  previousImages?: Array<IDayPicture>;
  }

export const DayCard: React.FC<IProps> = (props): React.ReactElement | null => {
  const [flip, setFlip] = useState(false);


  function readableDate(date: string): string {
    return DateTime.fromISO(date).toFormat('dd LLLL yyyy');
  }

  const toggleFlip = () => {
    setFlip(!flip);
  };

  if (!isDayPicture(props.dayPicture)) {
    return null;
  }

  // Mobile version (original layout)
  return (
    <div className="text-theme">
      <div className=" flex-col mt-8 m-4">
        <div className="h-full w-full aspect-square perspective-1000 cursor-pointer" onClick={toggleFlip}>
          <div
            className={`relative h-90 transition-transform duration-1000 [transform-style:preserve-3d] ${
              flip ? '[transform:rotateY(180deg)]' : ''
            }`}
          >
            {/* Front */}
            {props.dayPicture.media_type === 'image' ? (
              <div className="absolute inset-0 [backface-visibility:hidden]">
                <img className="object-cover h-90 w-full" src={props.dayPicture.url} alt="NASA Pic" />
              </div>
            ) : props.dayPicture.media_type === 'video' ? (
              <iframe
                src={props.dayPicture.url}
                title={props.dayPicture.title}
                className="absolute inset-0  w-full h-full"
                allowFullScreen
              ></iframe>
            ) : (
              <p className="border-1 aspect-square border-theme content-center text-center p-4 ">
                This is another media. Check NASA's official website{' '}
              </p>
            )}

            {/* Back */}
            <div className="absolute inset-0 p-4  h-90 w-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <p className="font-ibm text-theme opacity-75 text-[9px] text-justify font-medium">
                {props.dayPicture.explanation}
              </p>
              <div className="absolute top-0 left-0 w-1/8 h-1/2 border-l-1 border-t-1 border-theme"></div>
              <div className="absolute top-0 right-0 w-1/8 h-1/2 border-r-1 border-t-1 border-theme"></div>
              <div className="absolute bottom-0 left-0 w-1/8 h-1/2 border-l-1 border-b-1 border-theme"></div>
              <div className="absolute bottom-0 right-0 w-1/8 h-1/2 border-r-1 border-b-1 border-theme"></div>
            </div>
          </div>
        </div>

        {/* Info Container */}
        <div className="bg-accent mt-8">
          <div className="p-3">
            <p className="font-ibm text-text-dark font-normal text-base">{readableDate(props.dayPicture.date)}</p>
            <p className="font-ibm text-text-light font-normal text-base mt-1">{props.dayPicture.title}</p>
            {!!props.dayPicture.copyright && (
              <p className="font-ibm text-white opacity-75 text-xs mt-1">IMAGE CREDIT: {props.dayPicture.copyright}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
