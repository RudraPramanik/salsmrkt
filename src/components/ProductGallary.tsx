import React from 'react';

interface GalleryProps {
  mainImage: string;
  colors: { name: string; image: string }[];
  selectedColor: string;
  onThumbnailClick: (color: string, image: string) => void;
}

const Gallery: React.FC<GalleryProps> = ({ mainImage, colors, selectedColor, onThumbnailClick }) => {
  return (
    <div>
      {/* Main Image */}
      <div>
        <img src={mainImage} alt={`${selectedColor} Product`} style={{ width: '300px', height: '300px' }} />
      </div>

      {/* Thumbnails */}
      <div style={{ display: 'flex' }}>
        {colors.map((color, index) => (
          <img
            key={index}
            src={color.image}
            alt={`${color.name} Product`}
            style={{
              width: '100px',
              height: '100px',
              cursor: 'pointer',
              margin: '5px',
              border: selectedColor === color.name ? '2px solid black' : 'none'
            }}
            onClick={() => onThumbnailClick(color.name, color.image)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
