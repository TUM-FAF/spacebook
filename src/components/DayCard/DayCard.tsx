import { DateTime } from 'luxon';
import React, { useState } from 'react';
import { IDayPicture, INoPicture, isDayPicture } from '../../store';
import { useTheme } from '../ThemeContext';

interface IProps {
  dayPicture: IDayPicture | INoPicture;
}

export const DayCard: React.FC<IProps> = (props: IProps): React.ReactElement | null => {
  const [flip, setFlip] = useState(false);
  const { theme } = useTheme();
  
  function readableDate(date: string): string {
    return DateTime.fromISO(date).toFormat('dd LLLL yyyy');
  }

  const toggleFlip = () => {
    setFlip(!flip);
  };

  if (!isDayPicture(props.dayPicture)) {
    return null;
  }

  return (
    <div className="text-theme">
      <div className="flex flex-col mt-8 m-2">
        <div
          className="h-90 w-90 perspective-1000 cursor-pointer"
          onClick={toggleFlip}
        >
          <div
            className={`relative h-90 transition-transform duration-1000  [transform-style:preserve-3d] ${
              flip ? "[transform:rotateY(180deg)]" : ""
            }`}
          >
            {/* Front */}
            {props.dayPicture.media_type === 'image' ? (
              <div className="absolute inset-0 [backface-visibility:hidden]">
                <img
                  className="object-cover h-90 w-full"
                  src={props.dayPicture.url}
                  alt="NASA Pic"
                />
              </div>
            ) : (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href={props.dayPicture.url}
                onClick={(e) => e.stopPropagation()}
                className="block h-90 w-full backface-hidden"
              >
                <p className="text-theme font-ibm border border-theme  p-4 h-full w-full text-center flex items-center justify-center text-base">
                  This is a {props.dayPicture.media_type}. Follow link...
                </p>
              </a>
            )}

            {/* Back */}
            <div className="absolute inset-0 p-4 border border-theme h-90  w-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <p className="font-ibm text-theme opacity-75 text-[9px] text-justify font-medium">
                {props.dayPicture.explanation}
              </p>
            </div>
          </div>
        </div>
        
        {/* Info Container */}
        <div className="bg-accent mt-4">
          <div className="p-3">
            <p className="font-ibm text-text-dark font-normal text-base">
              {readableDate(props.dayPicture.date)}
            </p>
            <p className="font-ibm text-text-light font-bold text-base mt-1">
              {props.dayPicture.title}
            </p>
            {!!props.dayPicture.copyright && (
              <p className="font-ibm text-white opacity-75 text-xs mt-1">
                IMAGE CREDIT: {props.dayPicture.copyright}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};