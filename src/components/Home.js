import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Album from './Album';
import AlbumDetails from "./AlbumDetails";

class Home extends Component {

  constructor (props) {
    super (props);
    this.state = {
      showSidebar: false,
      showAlbumId: 0,
    }
  }

  toggleSidebar = () => this.setState ({
    showSidebar : !this.state.showSidebar
  })

  selectAlbum = index => this.setState ({
    showAlbumId: index
  });

  render() {
    const { showSidebar, showAlbumId } = this.state;
    const { albums } = this.props;
    
    return(
      <div>
        <div className="container my-2">         
          <Button outline color="primary"
          onClick={this.toggleSidebar}>
          {showSidebar? "Cacher les détails de l'album" : "Afficher les détails de l'album"}
          </Button>
          <div className="row">
            <div className = "col-9">       
              {
                albums.map((album, index) => (
                  <Album key={index} {...album}
                  selected = {index === showAlbumId}
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
      </div>
    )
  }
};

export default Home;
