import React, { Component } from 'react';
import MainNews from "./components/MainNews/MainNews";
import ThreadComments from "./containers/CommentsBlock/CommentsBlock";

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
          <MainNews />
          <ThreadComments/>
      </div>
    );
  }
}

export default App;