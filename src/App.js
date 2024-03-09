import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import ContactUs from "./Components/ContactUS";
import AboutUs from "./Components/AboutUs";
import Services from "./Components/Services";

function App() {
  return (
    <Router>
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
  );
}

export default App;
