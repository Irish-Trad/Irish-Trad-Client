import React from "react";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Homepage from "./pages/Homepage";
import Chords from "./pages/Chords";
import ClefToTab from "./pages/ClefToTab";
import Lessons from "./pages/Lessons";
import Terminology from "./pages/Terminology";

import HowToReadTab from "./pages/Lessons/pages/HowToReadTab";
import HowToString from "./pages/Lessons/pages/HowToString";
import HowToTune from "./pages/Lessons/pages/HowToTune";

import { AppContainer } from "./App.styles";

const App = () => (
  <AppContainer>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/chords" component={Chords} />
        <Route exact path="/clef-to-tab" component={ClefToTab} />
        <Route exact path="/lessons" component={Lessons} />
        <Route exact path="/lessons/how-to-read-tab" component={HowToReadTab} />
        <Route exact path="/lessons/how-to-string" component={HowToString} />
        <Route exact path="/lessons/how-to-tune" component={HowToTune} />
        <Route exact path="/terminology" component={Terminology} />
        <Route
          path="*"
          render={() => (
            <div>
              <h1>404 - No Page Found</h1>
              <Link to={"/"}>
                <button>Click Here to Return Home</button>
              </Link>
            </div>
          )}
        />
      </Switch>
      <Footer />
    </Router>
  </AppContainer>
);

export default App;
