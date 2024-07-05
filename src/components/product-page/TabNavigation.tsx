import React, { useState } from 'react';
import clsx from 'clsx';

interface TabNavigationProps {
  tabs: string[];
  onTabChange: (tab: string) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ tabs, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <div className="flex space-x-4 border-b-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => handleTabClick(tab)}
          className={clsx(
            'px-4 py-2',
            activeTab === tab ? 'border-b-2 border-blue-dark' : 'border-transparent'
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
