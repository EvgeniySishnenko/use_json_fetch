import React from "react";
import Data from "./Components/Data";
import Error from "./Components/Error";
import Loading from "./Components/Loading";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Data />
      <Error />
      <Loading />
    </div>
  );
}

export default App;
