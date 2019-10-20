import { DateTime } from 'luxon';
import React from 'react';
// @ts-ignore
import ShowMoreText from 'react-show-more-text';
import { IDayPicture } from '../../store';
import * as s from './DayCard.styled';

interface IProps {
  dayPicture: IDayPicture;
}

export const DayCard: React.FC<IProps> = (props: IProps): React.ReactElement => {
  function readableDate(date: string): string {
    return DateTime.fromISO(date).toFormat('dd LLLL yyyy');
  }

  return (
    <s.Container>
      <s.Date>{readableDate(props.dayPicture.date)}</s.Date>
      <s.DayImageContainer url={props.dayPicture.url} />
      <s.InfoContainer>
        <s.Title>{props.dayPicture.title}</s.Title>
        {!!props.dayPicture.copyright && <s.CopyRight>Image Credit: {props.dayPicture.copyright}</s.CopyRight>}
        <s.Explanation>
          <ShowMoreText lines={1} more={'Show more'} less={'Show less'}>
            {props.dayPicture.explanation}
          </ShowMoreText>
        </s.Explanation>
      </s.InfoContainer>
    </s.Container>
  );
};
