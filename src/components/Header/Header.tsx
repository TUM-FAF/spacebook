import React, { useEffect, useState } from 'react';
import { useTheme } from '../ThemeContext';
import { Logo } from '../../assets/icons/Logo';

export const Header: React.FC = (): React.ReactElement => {
  const { theme, setTheme } = useTheme();
  const isActive = (currentTheme: string): boolean => theme === currentTheme;
 const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
   useEffect(() => {
     const handleResize = () => {
       setIsDesktop(window.innerWidth >= 768);
     };
 
     window.addEventListener('resize', handleResize);
     return () => window.removeEventListener('resize', handleResize);
   }, []);
  return (
    <header className="mt-8 mr-2 ml-2 flex flex-row items-center">
      <Logo theme={theme} />

      <div className={`ml-auto text-right space-x-2 ${isDesktop ? 'text-[16px]' : 'text-[12px]'}`}>
        <button
          onClick={() => setTheme('dark')}
          className={` cursor-pointer font-ibm ${isActive('dark') ? 'text-dark' : 'opacity-50'}`}
        >
          Dark Mode
        </button>

        <button
          onClick={() => setTheme('light')}
          className={`cursor-pointer font-ibm ${isActive('light') ? 'text-dark' : 'opacity-50'}`}
        >
          Light Mode
        </button>
      </div>
    </header>
  );
};
