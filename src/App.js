import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';
import Album from './components/Album';
import albums from './data/albums.json';
import Navbar from './components/Navbar';
import AlbumDetails from "./components/AlbumDetails";

import AddAlbum from "./components/AddAlbum";

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor (props) {
    super (props);
    this.state = {
      showSidebar: false,
      showAlbumId: 0,
      albums: albums
    }
  }

  toggleSidebar = () => this.setState ({
    showSidebar : !this.state.showSidebar
  })

  selectAlbum = index => this.setState ({
    showAlbumId: index
  })

  addAlbum = newAlbum => {
    const albums = this.state.albums.concat(newAlbum);
    this.setState ({
      albums
    })
  }

  render() {
    const { showSidebar, showAlbumId, albums } = this.state;

    return (
      <div>
        <Navbar/>
        <div>
          <Route path="/" component={Home}/> 
          <Route path="/" component={Categories}/> 
        </div>
        <div className="container my-2">         
          <Button outline color="primary"
          onClick={this.toggleSidebar}>
          {showSidebar? 'Cacher la barre latérale' : 'Afficher la barre latérale'}
          </Button>
          <div className="row">
            <div className = "col-9">       
              {
                albums.map((album, index) => (
                  <Album key={index} {...album}
                  selected ={index === showAlbumId}
                  onSelectAlbum={()=>this.selectAlbum(index)}/>
                ))
              } 
            </div>
            <div className = "col-3">       
              {
              showSidebar && <AlbumDetails {...albums[showAlbumId]}/>
              }
              
            </div>
          </div>
        </div>
        <div className="container">
            <AddAlbum onSubmitForm={this.addAlbum}/>
        </div>
      </div>
    )
  }
};

export default App;
