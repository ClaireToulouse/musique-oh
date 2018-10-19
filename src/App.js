import React, { Component } from 'react';
import Album from './components/Album';
import 'bootstrap/dist/css/bootstrap.min.css';
import albums from './data/albums';


class App extends Component {

  render() {

    return (
      <div className="container">
        {
          albums.map((album, index) => (
            <Album key={index} {...album}/>
          ))
        } 
      </div>
    )
  }
}

export default App;
