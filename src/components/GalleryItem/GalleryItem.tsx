import { DateTime } from 'luxon';
import React, { useState} from 'react';
import { IDayPicture} from '../../store';


export const GalleryItem: React.FC<{
  image: IDayPicture;
  onSeeMore: (image: IDayPicture) => void;
  isZoomed: boolean;
}> = ({ image, onSeeMore}) => {
  const [showInfo, setShowInfo] = useState(false);


  return (
<div
  className="relative cursor-pointer overflow-hidden"
  onMouseEnter={() => setShowInfo(true)}
  onMouseLeave={() => setShowInfo(false)}
  onClick={() => onSeeMore(image)}
>
{image.media_type === 'image' ? (
  <img src={image.url}  className="aspect-square object-cover" />
) : image.media_type === 'video' ?(
  <div className="absolute inset-0 ">
    <iframe
      src={image.url}
      className="w-full h-full"
      allowFullScreen
    ></iframe>
  </div>
):(
  <p className=' border-1 border-theme text-center p-4 text-theme content-center aspect-square'> This is another media. Check NASA's official website</p>
)}
  
  <div className="group absolute inset-0 flex flex-col justify-center p-2">
  {/* Background overlay with opacity transition */}
  <div
    className={`absolute inset-0 bg-text-dark transition-opacity duration-300 pointer-events-none ${
      showInfo ? 'opacity-50' : 'opacity-0'
    }`}
  ></div>

  {/* Foreground content that appears only on hover */}
  <div className="relative z-10 hidden group-hover:flex flex-col items-center ">
    <p className="bg-text-light text-text-dark text-[14px] font-normal p-2">
      {DateTime.fromISO(image.date).toFormat('dd LLL yyyy')}
    </p>
    <p className="bg-text-light text-text-dark text-[16px]  p-3 w-full max-w-full text-center break-words">{image.title}</p>
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