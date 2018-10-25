import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class AddAlbum extends Component {

  constructor (props) {
    super(props);
    this.state = {
      title: '',
      artist: '',
      cover: '',
      artistbio: '',
      category: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState ({
      [event.target.name] : event.target.value
    })
  }
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmitForm(this.state);
    this.props.history.push('/');
  }

  render() {
    const { albums } = this.state;
  
    return (
      <div className ="container">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup row>
            <Label for="album title" sm={2}>Nom de l'album</Label>
            <Col sm={10}>
              <Input onChange={this.handleChange}
              type="text" id="title" placeholder="Nom de l'album" name="title" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="artist name" sm={2}>Nom de l'artiste</Label>
            <Col sm={10}>
              <Input onChange={this.handleChange}
              type="text" id="artist" placeholder="Nom de l'artiste" name="artist"/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="url name" sm={2}>Photo de l'album</Label>
            <Col sm={10}>
              <Input onChange={this.handleChange}
              type="url" id="cover" placeholder="Lien vers la pochette de l'album" name="cover"/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="artistbio" sm={2}>Text Area</Label>
            <Col sm={10}>
              <Input onChange={this.handleChange}
              type="textarea" id="artistbio" placeholder="au sujet de l'artiste " name="artistbio"/>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="category" sm={2}>Catégorie musicale</Label>
            <Col sm={10}>
              <Input type="select" name="category" id="category" multiple>
                <option>Pop/Rock</option>
                <option>Indé</option>
                <option>Electro</option>
                <option>Classique</option>
                <option>Jazz</option>
            </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleFile" sm={2}>File</Label>
            <Col sm={10}>
              <Input type="file" name="file" id="exampleFile" />
              <FormText color="muted">
                Ajoutez le lien vers la jaquette
              </FormText>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="checkbox2" sm={2}>Checkbox</Label>
            <Col sm={{ size: 10 }}>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id="checkbox2" />{' '}
                  Check me out
                </Label>
              </FormGroup>
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button>Envoyer</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
};

export default AddAlbum;