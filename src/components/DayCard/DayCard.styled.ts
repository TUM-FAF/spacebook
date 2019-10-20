import styled, { DefaultTheme, StyledComponent } from 'styled-components';

export const Container: StyledComponent<'div', DefaultTheme> = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 30px;
`;

export const Date: StyledComponent<'div', DefaultTheme> = styled.div`
  margin-left: 30px;
  font-family: DM Serif Display;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: #be0122;
  margin-bottom: 10px;
`;

interface IDayImageContainerProps {
  url: string;
}

export const DayImageContainer: StyledComponent<'div', DefaultTheme, IDayImageContainerProps> = styled.div`
  display: flex;
  height: 400px;
  max-width: 100%;
  min-width: 100%;
  background-image: url(${(props: IDayImageContainerProps): string => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const InfoContainer: StyledComponent<'div', DefaultTheme> = styled.div`
  max-width: 100%;
  background: linear-gradient(180deg, rgba(23, 23, 28, 0) 0%, #17171c 100%);
  padding: 20px 30px;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: 300;
`;

export const Title: StyledComponent<'div', DefaultTheme> = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 19px;
  color: #ffffff;
`;

export const CopyRight: StyledComponent<'div', DefaultTheme> = styled.div`
  font-size: 16px;
  color: #818080;
  margin-bottom: 10px;
`;

export const Explanation: StyledComponent<'div', DefaultTheme> = styled.div`
  font-size: 14px;
  color: #ffffff;
`;
