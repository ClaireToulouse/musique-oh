import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import AddAlbum from './components/AddAlbum';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>    
        <div>
          <Route path="/" exact component={Home}/> 
          <Route path="/Categories" exact component={Categories}/> 
          <Route path="/AddAlbum" exact component={AddAlbum}/> 
        </div>
 
      </div>
    )
  }
};

export default App;
