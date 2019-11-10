import React, { Component } from 'react';
import { Button } from "react-bootstrap";

class CharactersDetail extends Component{
  render() {
    const { name, id, addToFavourite, removeToFavourite } = this.props;
    return (
      <div> 
        <span>{name}</span>
        <h3> Add & Remove Favourite </h3>
          <Button variant="danger" onClick={() => removeToFavourite(id)}> Remove </Button>
          <Button variant="success" onClick={() => addToFavourite(id)}> Add </Button> 
      </div>
    )
  }
};

export default CharactersDetail;