import React from 'react';
import Header from './Header';
import logo from '../../assets/logo.png'

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header logoSrc={logo} />
      <main className="flex-grow p-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;
