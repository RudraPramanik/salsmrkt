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
    <div>
      {/* Main Image */}
      <div className="flex justify-center mb-4">
        <img src={mainImage} alt={`${selectedColor} Product`} className="w-96 h-96 object-cover" />
      </div>

      {/* Thumbnails Slider */}
      <div className="relative flex items-center">
        <button onClick={scrollLeft} className="absolute left-0 z-10 p-2 bg-gray-200 rounded-full shadow-md">
          &lt;
        </button>
        <div
          ref={sliderRef}
          className="flex overflow-x-auto scrollbar-hide space-x-2 mx-8"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {colors.map((color, index) => (
            <div key={index} className="flex-none w-24 h-24" style={{ scrollSnapAlign: 'center' }}>
              <img
                src={color.image}
                alt={`${color.name} Product`}
                className={`w-full h-full object-cover cursor-pointer ${selectedColor === color.name ? 'border-2 border-black' : 'border-none'}`}
                onClick={() => onThumbnailClick(color.name, color.image)}
              />
            </div>
          ))}
        </div>
        <button onClick={scrollRight} className="absolute right-0 z-10 p-2 bg-gray-200 rounded-full shadow-md">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Gallery;

// import React from 'react';

// interface GalleryProps {
//   mainImage: string;
//   colors: { name: string; image: string }[];
//   selectedColor: string;
//   onThumbnailClick: (color: string, image: string) => void;
// }

// const Gallery: React.FC<GalleryProps> = ({ mainImage, colors, selectedColor, onThumbnailClick }) => {
//   return (
//     <div>
//       {/* Main Image */}
//       <div>
//         <img src={mainImage} alt={`${selectedColor} Product`} style={{ width: '600px', height: '600px' }} />
//       </div>

//       {/* Thumbnails */}
//       <div style={{ display: 'flex' }}>
//         {colors.map((color, index) => (
//           <img
//             key={index}
//             src={color.image}
//             alt={`${color.name} Product`}
//             style={{
//               width: '100px',
//               height: '100px',
//               cursor: 'pointer',
//               margin: '5px',
//               border: selectedColor === color.name ? '2px solid black' : 'none'
//             }}
//             onClick={() => onThumbnailClick(color.name, color.image)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Gallery;
