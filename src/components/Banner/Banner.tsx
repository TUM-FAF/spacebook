import React from 'react';
import { Logo } from '../../assets/icons/Logo';

import * as s from './Banner.styled';

export const Banner: React.FC = (): React.ReactElement => {

  return (
    <s.Container>
      <s.Title>Astronomy Picture of the Day</s.Title>
    </s.Container>
  );
};
