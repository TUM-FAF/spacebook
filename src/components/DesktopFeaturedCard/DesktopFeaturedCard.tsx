import { DateTime } from 'luxon';
import React, { useState } from 'react';
import { IDayPicture, INoPicture, isDayPicture } from '../../store';
import { GalleryItem } from '../../components/GalleryItem/GalleryItem';

interface IProps {
  dayPicture: IDayPicture | INoPicture;
  isFeatured?: boolean;
  previousImages?: Array<IDayPicture>;
}

export const DesktopFeaturedCard: React.FC<IProps> = (props): React.ReactElement | null => {
  const [selectedImage, setSelectedImage] = useState<IDayPicture | null>(null);

  function readableDate(date: string): string {
    return DateTime.fromISO(date).toFormat('dd LLLL yyyy');
  }

  const handleSelectImage = (image: IDayPicture) => {
    setSelectedImage(image);
  };

  const handleCloseZoom = () => {
    setSelectedImage(null);
  };

  if (!isDayPicture(props.dayPicture)) {
    return null;
  }
  
  return (
    <div className={`${props.isFeatured ? 'hidden md:block' : 'block'}`}>
      <div className="flex flex-col lg:flex-row gap-20 mt-10">
        {/* Image container - larger for desktop */}
        <div className="lg:w-1/2 h-full self-stretch aspect-square">
          <div className="relative border-theme border-t-2 border-r-2 pr-4 pt-4">
            {props.dayPicture.media_type === 'image' ? (
              <img className="object-cover aspect-square" src={props.dayPicture.url} alt="NASA Pic" />
            ) : (
              <iframe src={props.dayPicture.url} className="block w-full aspect-square" allowFullScreen></iframe>
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
              <p className="font-ibm text-theme font-normal text-xl mb-4">
                {readableDate(props.dayPicture.date)}
              </p>

              <div>
                <div className="bg-accent p-4 flex flex-col justify-between">
                  <p className="font-ibm text-text-dark font-normal text-2xl">{props.dayPicture.title}</p>
                </div>

                {!!props.dayPicture.copyright && (
                  <p className="font-ibm text-theme opacity-75 text-base mt-4">
                    IMAGE CREDIT: {props.dayPicture.copyright}
                  </p>
                )}
              </div>

              <p className="font-ibm text-theme text-base mt-4">{props.dayPicture.explanation}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery of previous images */}
      {props.previousImages && props.previousImages.length > 0 && (
        <div className="mt-20">
          <h2 className="text-2xl font-normal mb-10">Browse Image Archive</h2>

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
                  <div key={`${image.date}-${index}`} className="col-span-4 grid grid-cols-4 gap-4">
                    {isImageOnLeft && (
                      <div className="col-span-2">
                        {image.media_type === 'image' ? (
                          <img src={image.url} alt={image.title} className="w-full object-cover aspect-square" />
                        ) : (
                          <iframe src={image.url} className="w-full h-full aspect-square" allowFullScreen></iframe>
                        )}
                      </div>
                    )}
                    <div className="col-span-2 text-theme flex flex-col justify-between m-8">
                      <div>
                        <div className="flex flex-row justify-between">
                          <p className="font-ibm text-theme text-xl">{readableDate(selectedImage.date)}</p>
                          <button onClick={handleCloseZoom} className="cursor-pointer">
                            <div className="text-theme">
                              <svg
                                width="22"
                                height="22"
                                viewBox="0 0 22 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  opacity="0.7"
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M22 2.02594L19.9741 0L11 8.98833L2.02594 0L0 2.02594L8.98833 11L0 19.9741L2.02594 22L11 13.0117L19.9741 22L22 19.9741L13.0117 11L22 2.02594Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                          </button>
                        </div>
                        <p className="font-ibm text-accent mt-4 text-2xl font-normal">{selectedImage.title}</p>
                        {!!selectedImage.copyright && (
                          <p className="text-base opacity-75 mt-4">IMAGE CREDIT: {selectedImage.copyright}</p>
                        )}
                        <p className="text-base mt-4">{selectedImage.explanation}</p>
                      </div>
                    </div>
                    {!isImageOnLeft && (
                      <div className="col-span-2">
                        {image.media_type === 'image' ? (
                          <img src={image.url} alt={image.title} className="w-full object-cover aspect-square" />
                        ) : (
                          <iframe src={image.url} className="w-full h-full" allowFullScreen></iframe>
                        )}
                      </div>
                    )}
                  </div>
                );
              }

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
};