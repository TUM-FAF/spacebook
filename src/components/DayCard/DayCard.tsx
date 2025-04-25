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
<div>
  <div className='flex flex-col mt-[35px] m-2'>
  <div
      className='h-90 w-90 [perspective:1000px] cursor-pointer'
      onClick={toggleFlip}
    >
      <div
        className={`relative h-90 transition-transform duration-1000 [transform-style:preserve-3d] ${
          flip ? '[transform:rotateY(180deg)]' : ''
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
    className="block h-90 w-full"
  >
    <p className="font-ibm text-white p-4 border border-white h-full w-full text-center flex items-center justify-center text-[16px]">
      This is a {props.dayPicture.media_type}. Follow link...
    </p>
  </a>
)}

        {/* Back */}
        <div className='absolute bg-dark inset-0 p-4 border-1 border-white h-90 w-full [transform:rotateY(180deg)] [backface-visibility:hidden]'>
          <p className='font-ibm text-white opacity-75 text-[9px] text-justify'>
          {props.dayPicture.explanation}
          </p>
        </div>
      </div>
    </div>
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
</div>
  );
};