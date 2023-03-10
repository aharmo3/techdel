import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const fontFamilyPoster = "Sansita Swashed";
const theme = createTheme({
  typography: {
    fontFamily: "Open Sans, sans-serif;",
    poster: {
      fontFamily: fontFamilyPoster,
      fontSize: 35,
      margin: 10,
      color: "#4D455D",
    },
    logo: {
      fontFamily: fontFamilyPoster,
      fontSize: 30,
      letterSpacing: 1,
      padding: 10,
      color: "#E96479",
    },
  },
  palette: {
    primary: { main: "#4D455D", secondary: "#E96479" },
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
