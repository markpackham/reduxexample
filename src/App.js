import React from "react";
import "./App.css";
import Posts from "./components/Posts";
import PostForm from "./components/Postform";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

const store = createStore(() => [], {}, applyMiddleware());

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>
          Using Redux in React learned from
          https://www.youtube.com/watch?v=93p3LxR9xfM
        </h1>
        <PostForm />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
