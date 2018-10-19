import React from 'react';
import { Media } from 'reactstrap';

const Album = ({cover, title, artist}) => {
  return (
    <Media className="py-2 col-9">
      <Media left href="#">
        <Media src={cover} alt={`photo cover de ${title}`}/>
      </Media>
      <Media body className="">
        <Media heading>
          {title}
        </Media>
        {artist}
      </Media>
    </Media>
  );
}

export default Album;
