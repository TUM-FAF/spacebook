import { DateTime } from 'luxon';
import React, { useState, useEffect } from 'react';
import { IDayPicture, INoPicture, isDayPicture } from '../../store';

interface IProps {
  dayPicture: IDayPicture | INoPicture;
  isFeatured?: boolean;
  previousImages?: Array<IDayPicture>;
}

export const GalleryItem: React.FC<{
  image: IDayPicture;
  onSeeMore: (image: IDayPicture) => void;
  isZoomed: boolean;
}> = ({ image, onSeeMore, isZoomed }) => {
  const [showInfo, setShowInfo] = useState(false);

  if (isZoomed) {
    return (
      <div className="col-span-1 relative">
        <img
          src={image.url}
          alt={image.title}
          className="object-cover w-full h-full aspect-square"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex justify-center items-center">
          <button
            className="bg-accent text-white py-1 px-3"
            onClick={() => onSeeMore(image)}
          >
            Close Zoom
          </button>
        </div>
      </div>
    );
  }

  return (
<div
  className="relative cursor-pointer overflow-hidden"
  onMouseEnter={() => setShowInfo(true)}
  onMouseLeave={() => setShowInfo(false)}
  onClick={() => onSeeMore(image)}
>
  <img src={image.url} alt={image.title} className="aspect-square object-cover" />
  <div className="group absolute inset-0 flex flex-col justify-center p-2">
  {/* Background overlay with opacity transition */}
  <div
    className={`absolute inset-0 bg-text-dark transition-opacity duration-300 pointer-events-none ${
      showInfo ? 'opacity-50' : 'opacity-0'
    }`}
  ></div>

  {/* Foreground content that appears only on hover */}
  <div className="relative z-10 hidden group-hover:flex flex-col items-center ">
    <p className="bg-text-light text-text-dark text-[16px] font-normal p-2">
      {DateTime.fromISO(image.date).toFormat('dd LLL yyyy')}
    </p>
    <p className="bg-text-light text-text-dark text-[16px] truncate p-3">{image.title}</p>
    <button
      className="bg-accent text-text-light text-[18px] px-8 py-2 mt-1 underline"
      onClick={(e) => {
        e.stopPropagation();
        onSeeMore(image);
      }}
    >
      See more
    </button>
  </div>
</div>
</div>
  );
};