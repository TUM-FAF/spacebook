import { DateTime } from 'luxon';
import React from 'react';
import { IDayPicture } from '../../store';
import * as s from './DayCard.styled';

interface IProps {
  dayPicture: IDayPicture;
}

export const DayCard: React.FC<IProps> = (props: IProps): React.ReactElement => {
  function readableDate(date: string): string {
    return DateTime.fromISO(date).toFormat('dd LLL yyyy');
  }

  return (
    <s.Container>
      <s.Date>{readableDate(props.dayPicture.date)}</s.Date>
      <s.DayImageContainer url={props.dayPicture.url} />
      <s.InfoContainer>
        <s.Title>{props.dayPicture.title}</s.Title>
        <s.CopyRight>{props.dayPicture.copyright}</s.CopyRight>
        <s.Explanation>{props.dayPicture.explanation}</s.Explanation>
      </s.InfoContainer>
    </s.Container>
  );
};
