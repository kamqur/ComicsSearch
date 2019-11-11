import React, { Component } from 'react';
import { Button} from "react-bootstrap";

class CharactersDetail extends Component {
  render() {
    const { name, id, addToFavourite, removeToFavourite,resourceURI,description} = this.props;
    console.log(this.props);
    return (
      <div> 
        <h3>{name}</h3>
        <br />
          <h4>Description</h4>
          <p>{description}</p>
        <a href={resourceURI}>ResourceURI</a>
        <br />
          <Button variant="danger" onClick={() => removeToFavourite({id, name})}> Remove From Favourite </Button>
          <Button variant="success" onClick={() => addToFavourite({id, name})}> Add To Favourite</Button> 
      </div>
    )
  }
};

export default CharactersDetail;