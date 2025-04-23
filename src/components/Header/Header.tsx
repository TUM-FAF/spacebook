import React from 'react';
import { Logo } from '../../assets/icons/Logo';

export const Header: React.FC = (): React.ReactElement => {

  return (
    <header className="m-8">
      <Logo />
    </header>
  );
};
