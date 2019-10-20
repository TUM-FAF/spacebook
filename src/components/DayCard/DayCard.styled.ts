import styled, { DefaultTheme, StyledComponent } from 'styled-components';
import BannerImage from '../../assets/resources/banner.png';


export const Container: StyledComponent<'div', DefaultTheme> = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const Date: StyledComponent<'div', DefaultTheme> = styled.div`
  margin-left: 30px;  
  font-family: DM Serif Display;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  text-transform: lowercase;
  color: #BE0122;
  margin-bottom: 10px;
`;

export const DayImageContainer: StyledComponent<'div', DefaultTheme> = styled.div`
  display: flex;
  height: 400px;
  max-width: 100%;
  min-width: 100%;
  background-image: url("https://apod.nasa.gov/apod/image/1910/MWBolideEricWagner1200.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const InfoContainer: StyledComponent<'div', DefaultTheme> = styled.div`
  max-width: 100%;
  background: linear-gradient(180deg, rgba(23, 23, 28, 0) 0%, #17171C 100%);
  padding: 20px 30px;
`;

export const Title: StyledComponent<'div', DefaultTheme> = styled.div` 
  display: flex;
  flex-wrap: wrap;
  font-family: DM Serif Display;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  color: #FFFFFF;
`;

export const CopyRight: StyledComponent<'div', DefaultTheme> = styled.div` 
  font-family: DM Serif Display;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  color: #818080;
  margin-bottom: 10px;
`;

export const Explanation: StyledComponent<'div', DefaultTheme> = styled.div` 

  font-family: DM Serif Display;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  color: #FFFFFF;
`;