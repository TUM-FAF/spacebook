import { DateTime } from 'luxon';
import React, { useState } from 'react';
import { IDayPicture, INoPicture, isDayPicture } from '../../store';
import Flip from "react-card-flip";

interface IProps {
  dayPicture: IDayPicture | INoPicture;
}

export const DayCard: React.FC<IProps> = (props: IProps): React.ReactElement | null => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  function readableDate(date: string): string {
    return DateTime.fromISO(date).toFormat('dd LLLL yyyy');
  }

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  if (!isDayPicture(props.dayPicture)) {
    return null;
  }

  return (
    <div className="flex flex-col mt-[30px] m-8">
      <Flip isFlipped={isFlipped} flipDirection="horizontal">
        {/* Front of the card (image) */}
        <div onClick={toggleFlip} className="cursor-pointer w-full">
  {props.dayPicture.media_type === 'image' ? (
    <div 
      className="h-90 bg-cover bg-center cursor-pointer"
      style={{ backgroundImage: `url(${props.dayPicture.url})` }}
    />
  ) : (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={props.dayPicture.url}
      onClick={(e) => e.stopPropagation()}
      className="flex items-center justify-center font-ibm h-90 text-white cursor-pointer p-4 border-l-1 border-r-1 border-t-1 border-b-1 border-white border-opacity-30 m-8"
    >
      This is a {props.dayPicture.media_type}. Follow link ...
    </a>
  )}
</div>

        {/* Back of the card (explanation) */}
        <div className=" p-2 border-l-1 border-r-1 border-t-1 border-b-1 border-white border-opacity-30">
        <div onClick={toggleFlip} className="cursor-pointer p-4 ">
          <p className="font-ibm text-white opacity-75 text-[10px] text-justify">
              {props.dayPicture.explanation}
          </p>
        </div>
        </div>
      </Flip>

      {/* Info Container (always visible) */}
      <div className="bg-accent mt-[16px]">
        <div className="p-[12px]">
          <p className="font-ibm text-dark font-normal text-[16px]">
            {readableDate(props.dayPicture.date)}
          </p>
          <p className="font-ibm text-light font-bold text-[16px] mt-[3px]">
            {props.dayPicture.title}
          </p>
          {!!props.dayPicture.copyright && (
            <p className="font-ibm text-white  opacity-75 text-[8px] mt-[5px]">
              IMAGE CREDIT: {props.dayPicture.copyright}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};