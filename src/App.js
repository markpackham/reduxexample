import React from "react";
import "./App.css";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="App">
      <h1>
        Using Redux in React learned from
        https://www.youtube.com/watch?v=93p3LxR9xfM
      </h1>
      <Posts />
    </div>
  );
}

export default App;
