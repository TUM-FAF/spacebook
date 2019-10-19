import React from 'react';
import { Logo } from '../../assets/icons/Logo';
import * as s from './Header.styled';

export const Header: React.FC = (): React.ReactElement => {

  return (
    <s.Header>
      <Logo />
    </s.Header>
  );
};
