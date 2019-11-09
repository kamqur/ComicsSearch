import React from 'react';


import {CardGroup,Card,Modal,Button} from 'react-bootstrap';



class CharacterDetail extends React.Component {


    constructor(props) {
      super(props)

    }


   render(){

       return (

        <Modal> 
        <Modal.Header> </Modal.Header>
        <Modal.Body>
          <div className="container">
            Sample Content
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.handleHideModal} color="primary">Close</Button>
        </Modal.Footer>
      </Modal>


       )
   }







}


export default CharacterDetail;

