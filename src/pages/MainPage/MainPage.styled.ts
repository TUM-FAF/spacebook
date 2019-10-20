import styled, { DefaultTheme, StyledComponent } from 'styled-components';

export const Container: StyledComponent<'div', DefaultTheme> = styled.div`
  font-family: 'DM Serif Display';
  max-width: 375px;
  min-width: 375px;
`;

export const ErrorMessage: StyledComponent<'div', DefaultTheme> = styled.div`
  font-family: 'DM Serif Display';
  color: #be0122;
  font-size: 30px;
  margin-left: 30px;
`;
