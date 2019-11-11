
import React, { Component } from 'react';
import { Modal} from "react-bootstrap";
import CharactersDetail from "../characters/charactersDetail";

class CharacterInfo extends Component {
    render() {
      const {showModal,handleHideModal} = this.props;
      return (
        <div> 
          <Modal show={showModal}
            onHide={handleHideModal}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          > 
          <Modal.Header> </Modal.Header>
          <Modal.Body>
            <div className="container">
              <CharactersDetail 
                {...this.props}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            {/* <Button variant="success" onClick={() => addToFavourite(id)}> Add </Button>  */}
          </Modal.Footer>
        </Modal>
        </div>
      )
    }
  };
  
  export default CharacterInfo;


 

