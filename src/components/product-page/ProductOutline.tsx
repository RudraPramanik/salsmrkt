import React, { useState } from 'react';
import TabNavigation from './TabNavigation';

const ProductOutline: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Description');

  const renderContent = () => {
    switch (activeTab) {
      case 'Description':
        return <p>This is the description of the product.</p>;
      case 'Showcase':
        return <p>This is the showcase of the product.</p>;
      case 'Reviews':
        return <p>This is the reviews of the product.</p>;
      default:
        return null;
    }
  };

  return (
    <div>
      <TabNavigation tabs={['Description', 'Showcase', 'Reviews']} onTabChange={setActiveTab} />
      <div className="mt-4">{renderContent()}</div>
    </div>
  );
};

export default ProductOutline;
