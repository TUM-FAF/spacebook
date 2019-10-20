import styled, { DefaultTheme, StyledComponent } from 'styled-components';

export const Header: StyledComponent<'header', DefaultTheme> = styled.header`
  padding: 20px 30px;
  display: flex;
`;



export const FAFLogo: StyledComponent<'img', DefaultTheme> = styled.img`
  max-width: 35px;
  max-height: 15px;
`;

export const Moto: StyledComponent<'span', DefaultTheme> = styled.span`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  padding-left: 10px;
  flex-grow: 1;
  padding-top: 3px;
  color: #FFFFFF;
`;
