import { Preview } from "../Preview/Preview";
import { Prolog } from "../Prolog/Prolog";
import "./App.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Support } from "../Support/Support";
import { Sea } from "../Sea/Sea";
import { FindImposter } from "../FindImposter/FindImposter";
import { useState } from "react";
import { ThroneRoom } from "../ThroneRoom/ThroneRoom";
import { Congratulation } from "../Congratulation/Congratulation";
import { About } from "../About/About";
import { Beginning } from "../Beginning/Beginning";
import { Puzzle } from "../Puzzle/Puzzle";
import { Game } from "../Game/Game";

function App() {
  const [componentModalActive, setComponentModalActive] = useState(false);
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/beginning">
            <Beginning />
          </Route>
          <Route path="/prolog">
            <Prolog />
          </Route>
          <Route path="/support">
            <Support />
          </Route>
          <Route path="/sea">
            <Sea
              modalActive={componentModalActive}
              setModalActive={setComponentModalActive}
            />
          </Route>
          <Route path="/findImposter">
            <FindImposter />
          </Route>
          <Route path="/throneRoom">
            <ThroneRoom />
          </Route>
          <Route path="/congratulation">
            <Congratulation />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/puzzle">
            <Puzzle />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/" a>
            <Preview />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
