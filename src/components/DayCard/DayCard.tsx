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
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function readableDate(date: string): string {
    return DateTime.fromISO(date).toFormat('dd LLLL yyyy');
  }

  const toggleFlip = () => {
    setFlip(!flip);
  };

  if (!isDayPicture(props.dayPicture)) {
    return null;
  }

  if (isDesktop && props.isFeatured) {
    return (
      <div>
        {/* Featured banner for desktop */}
        <div className="w-full mt-10">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Image container - larger for desktop */}
            <div className=" lg:w-5/12 aspect-square">
            
              <div
                className={"relative h-full"}
              >
                
                {props.dayPicture.media_type === 'image'}
                  <div className="absolute inset-0">
                    <img className="object-cover h-full w-full" src={props.dayPicture.url} alt="NASA Pic" />
                  </div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={props.dayPicture.url}
                    onClick={(e) => e.stopPropagation()}
                    className="block h-full w-full"
                  >
                    <p className="text-theme font-ibm border border-theme p-4 h-full w-full text-center flex items-center justify-center text-base">
                      This is a {props.dayPicture.media_type}. Follow link...
                    </p>
                  </a>
              </div>
            </div>

            {/* Info Container - side by side for desktop */}
            <div className="lg:w-5/12 relative flex items-stretch">
  {/* Left SVG line */}
  <div className="hidden lg:block">
    <svg
      className="h-full"
      viewBox="0 0 71 617"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M71 1H1V616H71" stroke="#EAE0D4" />
    </svg>
  </div>

  {/* Content block */}
  <div className='content-center'>
    <p className="font-ibm text-theme font-normal text-[18px] mb-[8px]">
      {readableDate(props.dayPicture.date)}
    </p>
    <div>
      <div className="bg-accent p-4 flex flex-col justify-between flex-1">
      <p className="font-ibm text-text-dark font-normal text-[24px]">
        {props.dayPicture.title}
      </p>
      </div>
      {!!props.dayPicture.copyright && (
        <p className="font-ibm text-theme opacity-75 text-[16px] mt-2">
          IMAGE CREDIT: {props.dayPicture.copyright}
        </p>
      )}
    </div>
    <p className="font-ibm text-theme text-[16px] mt-8 ">
      {props.dayPicture.explanation}
    </p>
  </div>

  <div className="hidden lg:block">
    <svg
      className="h-full"
      viewBox="0 0 71 617"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 1H70V616H0" stroke="#EAE0D4" />
    </svg>
  </div>
</div>

          </div>
        </div>

        {/* Gallery of previous images */}
        {props.previousImages && props.previousImages.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Browse Image Archive</h2>
            <div className="grid h-full lg:grid-cols-4 gap-4">
              {props.previousImages.map((image, index) => (
                <GalleryItem key={`${image.date}-${index}`} image={image} />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Mobile version (original layout)
  return (
    <div className="text-theme">
      <div className="flex flex-col mt-8 m-2">
        <div className="h-90 w-90 perspective-1000 cursor-pointer" onClick={toggleFlip}>
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
            ) : (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={props.dayPicture.url}
                onClick={(e) => e.stopPropagation()}
                className="block h-90 w-full [backface-visibility:hidden]"
              >
                <p className="text-theme font-ibm border border-theme p-4 h-full w-full text-center flex items-center justify-center text-base">
                  This is a {props.dayPicture.media_type}. Follow link...
                </p>
              </a>
            )}

            {/* Back */}
            <div className="absolute inset-0 p-4 border border-theme h-90 w-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <p className="font-ibm text-theme opacity-75 text-[9px] text-justify font-medium">
                {props.dayPicture.explanation}
              </p>
            </div>
          </div>
        </div>

        {/* Info Container */}
        <div className="bg-accent mt-4">
          <div className="p-3">
            <p className="font-ibm text-text-dark font-normal text-base">{readableDate(props.dayPicture.date)}</p>
            <p className="font-ibm text-text-light font-bold text-base mt-1">{props.dayPicture.title}</p>
            {!!props.dayPicture.copyright && (
              <p className="font-ibm text-white opacity-75 text-xs mt-1">IMAGE CREDIT: {props.dayPicture.copyright}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

  // Gallery item component for previous images
const GalleryItem: React.FC<{ image: IDayPicture }> = ({ image }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [flip, setFlip] = useState(false);
  
  const handleClick = () => {
    setFlip(!flip);
  };
  
  return (
    <div 
      className="relative cursor-pointer overflow-hidden"
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
      onClick={handleClick}
    >
      <div className={`transition-transform duration-500 ${flip ? 'scale-0' : 'scale-100'}`}>
        {image.media_type === 'image' ? (
          <img src={image.url} alt={image.title} className="aspect-square object-cover" />
        ) : (
          <div className="aspect-square  border-theme flex items-center justify-center">
            <p className="text-theme text-sm">Video content</p>
          </div>
        )}
        
        {/* Hover overlay with info */}
        <div 
          className={`absolute inset-0 bg-text-dark bg-opacity-50 transition-opacity duration-300 ${
            showInfo ? 'opacity-50' : 'opacity-0'
          } flex flex-col justify-center p-2`}
        >
          <p className="bg-text-light text-dark text-xs font-semibold self-center">{DateTime.fromISO(image.date).toFormat('dd LLL yyyy')}</p>
          <p className="bg-text-light text-darktext-xs truncate self-center">{image.title}</p>
          <button className="bg-accent text-white text-xs py-1 px-2 mt-1 self-center">See more</button>
        </div>
      </div>
    
    </div>
  );
};