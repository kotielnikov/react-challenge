import React from "react";
import { createGlobalStyle } from "styled-components";
import { SnackbarProvider } from "./components/SnackBar";
import { SignaturePage } from "./components/SignaturePage";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Roboto;
  }
`;

export const App = () => {
  return (
    <SnackbarProvider>
      <GlobalStyle />
      <SignaturePage />
    </SnackbarProvider>
  );
};
