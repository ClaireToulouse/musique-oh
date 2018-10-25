import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {Alert} from 'reactstrap';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Settings from './components/Settings';
import AddAlbum from './components/AddAlbum';
import albums from './data/albums';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor (props) {
    super(props);
    this.state= {
      albums:albums,
      alertMessage: ''
    }
  }

  addAlbum = newAlbum => {
    const albums = this.state.albums.concat(newAlbum);
    this.setState ({
      albums,
      alertMessage: `L'album ${newAlbum.title} a bien été ajouté`
    })
  };
 
  onDismiss = () => {
    this.setState({ alertMessage: '' });
  }

  render() {
    const { albums, alertMessage } = this.state;
    return (
      <div>
        <Navbar/>    
        <Alert color="success" isOpen={alertMessage !== ''} toggle={this.onDismiss} >
          {alertMessage} 
        </Alert>
        <div>
          <Route path="/" exact render={(props)=> <Home {...props} albums={albums}/> }/> 
          <Route path="/settings" exact component={Settings}/> 
          <Route path="/addnewalbum" exact render={(props)=> <AddAlbum {...props} onSubmitForm={this.addAlbum}/> }/>
        </div>
      </div>
    )
  }
};

export default App;
