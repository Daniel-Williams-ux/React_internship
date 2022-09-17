import React from 'react';
import Dev from './Dev';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>This is my first React App</h1>
        <Dev name="Daniel" age="25" program="Internship" skills="React Developer" />
      </div>
    )
  }
}

export default App;