import React, { Component } from 'react';
import { Media } from 'reactstrap';

const Album = props => {
  return (
    <Media>
      <Media left href="#">
        <Media src="https://img.discogs.com/ErZsmFSMqd_DJ8V4lRN4bw6EaNw=/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-49769-1237399807.jpeg.jpg" alt="album cover" />
      </Media>
      <Media body>
        <Media heading>
          Violator
        </Media>
        Depeche Mode
      </Media>
    </Media>
  );
};
export default Album;