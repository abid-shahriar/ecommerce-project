import React from "react";
import Homepage from "./pages/homepage/homepage.component";
import { Route, link } from "react-router-dom";
import "./App.css";

const hatsPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/hats" component={hatsPage} />
    </div>
  );
}

export default App;
