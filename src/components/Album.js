import React from 'react';
import { Media } from 'reactstrap';

const Album = ({cover, title, artist, onSelectAlbum, selected, category}) => {
  return (
    <Media className="my-2"
    onClick={onSelectAlbum}
    style={{background: selected? '#ddf' : '#fff'}}>
      <Media left>
        <Media style={{ maxWidth: '150px' }} src={cover} alt={`jaquette album ${title}`}/>
      </Media>
      <Media body className="pl-2">
        <Media heading>
          {title}
        </Media>
          {artist}<br/>
        <small>
          {category}
        </small>
      </Media>
    </Media>
  );
}

export default Album;
