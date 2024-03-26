import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import ContactUs from "./Components/ContactUS/ContactUS";
import AboutUs from "./Components/AboutUS/AboutUs";
import Services from "./Components/ServicesSection/Services";

import "./App.css";
import { ThemeProvider, styled } from "@mui/material/styles";
import { theme } from "./utils/newTheme";
import MiniHeader from "./Components/MiniHeader";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MiniHeader />
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
