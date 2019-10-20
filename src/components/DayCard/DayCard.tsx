import React from 'react';
import { Logo } from '../../assets/icons/Logo';
import BannerImage from '../../assets/resources/banner.png';

import * as s from './DayCard.styled';

export const DayCard: React.FC = (): React.ReactElement => {

  return (
    <s.Container>
      <s.Date>2019 October 20</s.Date>
      <s.DayImageContainer />
      <s.InfoContainer>
        <s.Title>
          All Female Spacewalk Repairs Space Station
        </s.Title>
        <s.CopyRight>
          Image Credit: NASA TV, Expedition 61
        </s.CopyRight>
        <s.Explanation>
          Explanation: The failed unit was beyond the reach of the robotic Canadarm2.
        </s.Explanation>
      </s.InfoContainer>
    </s.Container>
  );
};
