import React, { Component } from 'react';
import Album from './components/Album';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

const albums = [
  {
    title :"Violator",
    artist : "Depeche Mode",
    cover : "https://img.discogs.com/ErZsmFSMqd_DJ8V4lRN4bw6EaNw=/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-49769-1237399807.jpeg.jpg",
  },
  {
    title :"Gloria",
    artist :"Vivaldi",
    cover :"https://img.discogs.com/d6eHtGeS0QpvRe8e7WkA4PAy11I=/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-5075417-1383824654-4415.jpeg.jpg"
  }
];

class App extends Component {

  render() {
    return (
      <div className="container">
        {
          albums.map((album, index) => (
            <Album key={index}
              title={album.title}
              artist={album.artist}
              cover={album.cover}
            />
          ))
        } 
      </div>
    )
  }
}

export default App;
