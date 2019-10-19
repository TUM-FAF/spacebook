import styled, { DefaultTheme, StyledComponent } from 'styled-components';
import BannerImage from '../../assets/resources/banner.png';


export const Container: StyledComponent<'div', DefaultTheme> = styled.div`
  display: flex;
  background-image: url(${BannerImage});
  background-repeat: no-repeat;
  background-size: contain;
  height: 400px;
  width: 100%;
  margin-top: -30px;
  margin-bottom: -70px;
`;

export const Title: StyledComponent<'div', DefaultTheme> = styled.div`
  position: relative;
  width: 200px;
  height: 240px;
  left: 40px;
  top: 130px;

  font-family: DM Serif Display;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 106.2%;
  color: white;
`;
