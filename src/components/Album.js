import React from 'react';
import { Media } from 'reactstrap';
import AlbumDetails from './AlbumDetails';

const Album = ({cover, title, artist, onSelectAlbum}) => {
  return (
    <Media className="py-2">
      <Media left
      onClick={onSelectAlbum}>
        <Media style={{ maxWidth: '150px' }} src={cover} alt={`jaquette album ${title}`}/>
      </Media>
      <Media body className="pl-2">
        <Media heading>
          {title}
        </Media>
        {artist}  
      </Media>
    </Media>
  );
}

export default Album;
