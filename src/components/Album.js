import React from 'react';
import { Media } from 'reactstrap';
import AlbumDetails from './AlbumDetails';

const Album = ({cover, title, artist}) => {
  return (
    <Media className="py-2">
      <Media left href="#">
        <Media style={{ maxWidth: '150px' }} src={cover} alt={`jaquette album ${title}`}/>
      </Media>
      <Media body className="pl-2">
        <Media heading>
          {title}
        </Media>
        {artist}
        <div className="pt-2 font-italic">
          <AlbumDetails />
        </div>        
      </Media>
    </Media>
  );
}

export default Album;
