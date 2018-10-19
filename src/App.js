import React, { Component } from 'react';
import Album from './components/Album';
import 'bootstrap/dist/css/bootstrap.min.css';
import albums from './data/albums.json';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { Button } from 'reactstrap';


class App extends Component {

  constructor (props) {
    super (props);
    this.state = {
      showSidebar: false
    }
  }

  toggleSidebar = () => this.setState ({
    showSidebar : !this.state.showSidebar
  })

  render() {
    return (
      <div>
        <Navbar />
        <div className="container my-2">
          <Button outline color="primary"
          onClick={this.toggleSidebar}>{this.state.showSidebar? 'Cacher la barre latérale' : 'Afficher la barre latérale'}
          </Button>
          <div className="row">
            <div className = "col-9">       
              {albums.map((album, index) => (
                <Album key={index} {...album}/>
              ))
              } 
            </div>
            <div className = "col-3">       
              {
              this.state.showSidebar ? <Sidebar /> : ''
              }
            </div>
          </div>

        </div>
      </div>
    )
  }
};

export default App;
