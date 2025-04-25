import React from 'react';
import { useTheme } from '../ThemeContext';
import { Logo } from '../../assets/icons/Logo';

export const Header: React.FC = (): React.ReactElement => {
  const { theme, setTheme } = useTheme();
  const isActive = (currentTheme: string): boolean => theme === currentTheme;

  return (
    <header className="m-8 flex flex-row items-center">
      <Logo theme={theme as 'dark' | 'light'} />
      
      <div className="ml-auto text-right text-[12px] space-x-2 ">
      <button
        onClick={() => setTheme('dark')}
        className={` cursor-pointer font-ibm ${isActive('dark') ? 'text-light underline' : 'text-dark'}`}
      >
        Dark Mode
      </button>
      
      <button
        onClick={() => setTheme('light')}
        className={`cursor-pointer font-ibm ${isActive('light') ? 'text-dark underline' : 'text-light'}`}
      >
        Light Mode
      </button>
      </div>
    </header>
  );
};
