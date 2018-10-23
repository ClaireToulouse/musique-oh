import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const AlbumDetails = ({cover, title, artist, artistbio}) => {
  return (
    <Card>
    <CardBody>
      <CardTitle>{title}</CardTitle>
      <CardSubtitle>{artist}</CardSubtitle>
      </CardBody>
      <CardImg top width="100%" src={cover} alt={`photo cover de ${title}`} />
      <CardBody>
      <CardText>{artistbio} </CardText>
      <Button>Button</Button>
    </CardBody>
  </Card>
  );
}
export default AlbumDetails; 