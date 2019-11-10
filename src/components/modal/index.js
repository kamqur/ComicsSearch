
import React, { Component } from 'react';
import { Button,Modal} from "react-bootstrap";

class CharacterInfo extends Component {
    render() {
      const {showModal,handleHideModal,addToFavourite,name} = this.props;
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
              <h3>{name}</h3>
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


 

