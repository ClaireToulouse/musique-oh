import React, { Component } from 'react';
import Album from './components/Album';
import 'bootstrap/dist/css/bootstrap.min.css';
import albums from './data/albums.json';
import Sidebar from './components/Sidebar';


class App extends Component {

  constructor (props) {
    super (props);
    this.state {
      showSidebar : false
    }
  }

  render() {

    return (
      <div className="container">
        <div className="row">
          {
            albums.map((album, index) => (
              <Album key={index} {...album}/>
            ))
          } 
          <Sidebar />
        </div>
      </div>
    )
  }
}

export default App;
