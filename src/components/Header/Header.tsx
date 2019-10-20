import React from 'react';
import { Logo } from '../../assets/icons/Logo';
import FAFLogo from '../../assets/resources/faf_logo.png';
import * as s from './Header.styled';

export const Header: React.FC = (): React.ReactElement => {

  return (
    <s.Header>
      <Logo />
      <s.Moto>let's fly to stars</s.Moto>
      <s.FAFLogo src={FAFLogo}/>
    </s.Header>
  );
};
