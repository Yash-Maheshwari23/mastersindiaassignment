import './App.css';
import React from 'react';
import List from './List';

class App extends React.Component {
  constructor(props) {
    super(props);
  };
  render(){
  return (
    <div className="App">
      <List/>
    </div>
  );
  }
}

export default App;
