import React, { useState } from 'react';
import TabNavigation from '../ui/TabNavigation';
import YouTubeVideo from './YouTubeVideo';
import ProductDetails from './ProductDetails';

const ProductOutline: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Description');

  const renderContent = () => {
    switch (activeTab) {
      case 'Description':
        return <div><ProductDetails/></div>;
      case 'Showcase':
        return <div><YouTubeVideo videoUrl='https://www.youtube.com/watch?v=PdJq-dAQr-Y'/></div>
      default:
        return null;
    }
  };

  return (
    <div>
      <TabNavigation tabs={['Description', 'Showcase']} onTabChange={setActiveTab} />
      <div className="mt-4">{renderContent()}</div>
    </div>
  );
};

export default ProductOutline;
