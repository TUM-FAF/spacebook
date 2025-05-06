import { DateTime } from 'luxon';
import React, { useState, useEffect } from 'react';
import { IDayPicture, INoPicture, isDayPicture } from '../../store';
import { GalleryItem } from '../../components/GalleryItem/GalleryItem'; 

interface IProps {
  dayPicture: IDayPicture | INoPicture;
  isFeatured?: boolean;
  previousImages?: Array<IDayPicture>;
}

export const DayCard: React.FC<IProps> = (props): React.ReactElement | null => {
  const [flip, setFlip] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const [selectedImage, setSelectedImage] = useState<IDayPicture | null>(null);

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

  const handleSelectImage = (image: IDayPicture) => {
    setSelectedImage(image);
  };

  const handleCloseZoom = () => {
    setSelectedImage(null);
  };

  if (!isDayPicture(props.dayPicture)) {
    return null;
  }

  if (isDesktop && props.isFeatured) {
    return (
      <div>
        <div className="flex flex-col lg:flex-row gap-20 items-stretch mt-10">
          {/* Image container - larger for desktop */}
          <div className="lg:w-1/2 h-full self-stretch aspect-square">
            <div className="relative border-theme border-t-2 border-r-2 pr-4 pt-4">
              {props.dayPicture.media_type === 'image' ? (
                <img
                  className="object-cover aspect-square"
                  src={props.dayPicture.url}
                  alt="NASA Pic"
                />
              ) : (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={props.dayPicture.url}
                  onClick={(e) => e.stopPropagation()}
                  className="block w-full"
                >
                  <p className="text-theme font-ibm border border-theme p-4 h-full w-full text-center flex items-center justify-center text-base">
                    This is a {props.dayPicture.media_type}. Follow link...
                  </p>
                </a>
              )}
            </div>
          </div>

          {/* Info Container */}
          <div className="lg:w-1/2 h-full self-stretch">
            <div className="relative aspect-square p-8">
              {/* Bracket decorations */}
              <div className="absolute top-0 left-0 w-1/8 h-1/2 border-l-2 border-t-2 border-theme"></div>
              <div className="absolute top-0 right-0 w-1/8 h-1/2 border-r-2 border-t-2 border-theme"></div>
              <div className="absolute bottom-0 left-0 w-1/8 h-1/2 border-l-2 border-b-2 border-theme"></div>
              <div className="absolute bottom-0 right-0 w-1/8 h-1/2 border-r-2 border-b-2 border-theme"></div>

              <div className="content-center">
                <p className="font-ibm text-theme font-normal text-[22px] mb-[16px]">
                  {readableDate(props.dayPicture.date)}
                </p>

                <div>
                  <div className="bg-accent p-4 flex flex-col justify-between">
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

                <p className="font-ibm text-theme text-[16px] mt-[16px]">
                  {props.dayPicture.explanation}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery of previous images */}
        {props.previousImages && props.previousImages.length > 0 && (
          <div className="mt-20">
            <h2 className="text-[24px] font-normal mb-10">Browse Image Archive</h2>
            <div className="grid h-full lg:grid-cols-4 gap-4">
              {props.previousImages.map((image, index) => {
                         const isSelected = selectedImage === image;
                         const selectedIndex = selectedImage ? (props.previousImages ?? []).indexOf(selectedImage) : -1;
                         const selectedRow = Math.floor(selectedIndex / 4);
                         const currentRow = Math.floor(index / 4);
                 
                         if (selectedImage && currentRow === selectedRow && !isSelected) {
                           return null;
                         }
                 
                         if (isSelected) {
                           const isImageOnLeft = selectedIndex % 4 < 2;
                 
                           return (
                             <div
                               key={`${image.date}-${index}`}
                               className="col-span-4 grid grid-cols-4 gap-4"
                             >
                               {isImageOnLeft && (
                                 <div className="col-span-2">
                                   <img
                                     src={selectedImage.url}
                                     alt={selectedImage.title}
                                     className="w-full object-cover aspect-square"
                                   />
                                 </div>
                               )}
                      {/* Info Section */}
                      <div className="col-span-2 text-theme flex flex-col justify-between m-8">
                        <div>
                        <div className="flex flex-row justify-between">
                        <p className="font-ibm text-theme text-[22px]">{readableDate(selectedImage.date)}</p>
                        <button
onClick={handleCloseZoom}
                       className='cursor-pointer' >
                          
                    <div className='text-theme'>
                          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M22 2.02594L19.9741 0L11 8.98833L2.02594 0L0 2.02594L8.98833 11L0 19.9741L2.02594 22L11 13.0117L19.9741 22L22 19.9741L13.0117 11L22 2.02594Z" fill="currentColor"/>
</svg>
</div>

                        </button>
                        </div>
                          <p className="font-ibm text-accent mt-4 text-[24px] font-normal">{selectedImage.title}</p>
                          
                    
                        {!!selectedImage.copyright && (
                            <p className="text-[16px] opacity-75 mt-4">IMAGE CREDIT: {selectedImage.copyright}</p>
                          )}
                          <p className="text-[16px] mt-4">{selectedImage.explanation}</p>
                        </div>
                        
                      </div>

                      {/* Image Section (if image is on the right) */}
                      {!isImageOnLeft && (
                        <div className="col-span-2">
                          <img
                            src={selectedImage.url}
                            alt={selectedImage.title}
                            className="w-full object-cover aspect-square"
                          />
                        </div>
                      )}
                    </div>
                  );
                }

                // Render the regular gallery item
                return (
                  <GalleryItem
                    key={`${image.date}-${index}`}
                    image={image}
                    onSeeMore={handleSelectImage}
                    isZoomed={false}
                  />
                );
              })}
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
                className="block h-90 w-full [backface-visibility:hidden]"
              >
                <p className="text-theme font-ibm border border-theme p-4 h-full w-full text-center flex items-center justify-center text-base">
                  This is a {props.dayPicture.media_type}. Follow link...
                </p>
              </a>
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

