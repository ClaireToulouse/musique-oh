import React, { Component } from 'react';
import Album from './components/Album';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Album/>
      </div>
    )
  }
}

export default App;
