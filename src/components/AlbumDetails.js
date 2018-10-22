import React from 'react';
import { Media } from 'reactstrap';

const AlbumDetails = ({cover, title, artist, artistbio}) => {
  return (
    <Media className="py-2">
      <Media left href="#">
        <Media src={cover} alt={`photo cover de ${title}`}/>
      </Media>
      <Media body className="pl-2">
        <Media heading>
          {title}
        </Media>
        {artist}
        <div className="pt-2 font-italic">
          {artistbio}
        </div>
      </Media>
    </Media>
  );
}

export default AlbumDetails;