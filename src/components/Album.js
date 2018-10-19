import React from 'react';
import { Media } from 'reactstrap';

const Album = ({cover, title, artist}) => {
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
      </Media>
    </Media>
  );
}

export default Album;
