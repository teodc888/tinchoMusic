import "./App.css";

import * as React from "react";

//React
import { useEffect } from "react";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { getPersonas } from "./redux/actions/index";

//Routes
import { Routes, Route } from "react-router-dom";

//componentes
import Navbar from "./components/navbar/navBar";
import Home from "./components/home/home";

//modo dark
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPersonas());
  }, [dispatch]);

  const personas = useSelector((state) => state.personas);

  console.log(personas);

  //modo dark

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
