import React, { useRef } from 'react';

interface GalleryProps {
  mainImage: string;
  colors: { name: string; image: string }[];
  selectedColor: string;
  onThumbnailClick: (color: string, image: string) => void;
}

const Gallery: React.FC<GalleryProps> = ({ mainImage, colors, selectedColor, onThumbnailClick }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -120, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 120, behavior: 'smooth' });
    }
  };

  return (
    <div className='max-w-fit ' >
      {/* Main Image */}
      <div className="flex justify-center mb-4">
        <img src={mainImage} alt={`${selectedColor} Product`} className=" w-full  object-cover border border-primary-gray rounded-3xl " />
      </div>

      {/* Thumbnails Slider */}
      <div className="relative flex items-center">
        <button onClick={scrollLeft} className="absolute left-0 z-10 p-2 ">
          &lt;
        </button>
        <div
          ref={sliderRef}
          className="flex overflow-x-auto scrollbar-hide space-x-3 md:space-x-6 2xl:space-x-8 3xl:space-x-10 4xl:space-x-12 mx-8"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {colors.map((color, index) => (
            <div key={index} className="flex-none  w-24 h-24 md:w-28 2xl:w-36 2xl:h-36 3xl:w-44 3xl:h-44 4xl:w-60 4xl:h-60 md:h-28" style={{ scrollSnapAlign: 'center' }}>
              <img
                src={color.image}
                alt={`${color.name} Product`}
                className={`w-full h-full object-cover cursor-pointer ${selectedColor === color.name ? 'gradient-border' : 'border-none'}`}
                onClick={() => onThumbnailClick(color.name, color.image)}
              />
            </div>
          ))}
        </div>
        <button onClick={scrollRight} className="absolute right-0 z-10 p-2">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Gallery;
