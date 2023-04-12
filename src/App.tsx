import React from 'react';
import styled, { createGlobalStyle } from "styled-components"
import {RouterProvider} from "react-router-dom";
import Router from './Router';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import {useRecoilValue} from "recoil";
import { isDarkAtom } from './atoms';

const GlobalStyle = createGlobalStyle`
a {
  text-decoration:none;
  color:inherit;
  font-size: 14px;
  font-weight: 600;
}
`;

function App() {
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <>
      <ThemeProvider theme={isDark? darkTheme:lightTheme}>
        <GlobalStyle/>
        <RouterProvider router={Router}/>
      </ThemeProvider>
    </>    
  );
}

export default App;
