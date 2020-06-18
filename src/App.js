import React from 'react';
import './App.scss';
import Home from './components/Home';

class App extends React.Component {
  render() {
    return (
      <div id="home-div" className="App">
        <Home />
      </div>
    )
  }
}

export default App;
