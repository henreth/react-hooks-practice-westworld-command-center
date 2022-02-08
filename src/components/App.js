import React from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import WestworldMap from "./WestworldMap";
import Headquarters from "./Headquarters";``

function App() {
  return (
    <Segment id="app">
      <WestworldMap/>
      <Headquarters/>
      {/* What components should go here? Check out Checkpoint 1 of the Readme if you're confused */}
    </Segment>
  );
}

export default App;
