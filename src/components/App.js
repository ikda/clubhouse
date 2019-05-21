import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 935px;
  width: 100%;
`;


export default () => {
  return (
    <ThemeProvider theme={Theme}>
      <Wrapper>
        <GlobalStyles />
      </Wrapper>
    </ThemeProvider>
  )
}