import React from "react";
import Weather from "./Weather";
import "./App.css";
import { Puff } from "react-loader-spinner";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello World from React
        <Weather city="New York" />
        <br />
        <Puff
          height="80"
          width="80"
          radius={1}
          color="yellow"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </header>
    </div>
  );
}

export default App;
