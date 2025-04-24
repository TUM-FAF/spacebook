import { DateTime } from 'luxon';
import React, { useState } from 'react';
import { IDayPicture, INoPicture, isDayPicture } from '../../store';

interface IProps {
  dayPicture: IDayPicture | INoPicture;
}

export const DayCard: React.FC<IProps> = (props: IProps): React.ReactElement | null => {
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

  return (
<div className="flex flex-col mt-[30px] m-8" onClick={toggleFlip}>
  {flip ? (
    // Back of the card
    <div className="p-4 border border-white border-opacity-30 cursor-pointer hover:scale-105 transform-3d perspective-[1000px] rotate-y-12">
      <p className="font-ibm text-white opacity-75 text-[10px] text-justify">
        {props.dayPicture.explanation}
      </p>
    </div>
  ) : (
    // Front of the card
    props.dayPicture.media_type === 'image' ? (
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
        className="flex items-center justify-center font-ibm h-90 text-white cursor-pointer p-4 border border-white border-opacity-30"
      >
        This is a {props.dayPicture.media_type}. Follow link ...
      </a>
    )
  )}

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
        <p className="font-ibm text-white opacity-75 text-[8px] mt-[5px]">
          IMAGE CREDIT: {props.dayPicture.copyright}
        </p>
      )}
    </div>
  </div>
</div>
  );
};