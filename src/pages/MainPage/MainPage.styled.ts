import styled, { DefaultTheme, StyledComponent } from 'styled-components';

export const Container: StyledComponent<'div', DefaultTheme> = styled.div`
  font-family: 'DM Serif Display';
  min-width: 375px;

  @media only screend and (min-width:768px) {
    width: 800px;
  } 
`;
