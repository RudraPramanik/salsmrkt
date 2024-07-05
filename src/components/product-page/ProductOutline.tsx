import React, { useState } from 'react';
import TabNavigation from './TabNavigation';
import YouTubeVideo from '../ui/YouTubeVideo';

const ProductOutline: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Description');

  const renderContent = () => {
    switch (activeTab) {
      case 'Description':
        return <p>This is the description of the product.</p>;
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
