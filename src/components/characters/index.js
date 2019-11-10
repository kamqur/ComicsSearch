import React from 'react';
// import axios from 'axios';
import {CardGroup,Card} from 'react-bootstrap';
//import Modal from '../Modal'

class ComicsList extends React.Component {

    // constructor(props) {
    //   super(props)
    //   this.state = {
    //       data:[]
        
    //   }
    // }

    render() {
      const { commics, currentPage } = this.props;
      const characterinfo = commics.map((res, index) => 
      <Card>
        <Card.Img variant="top" src={res.thumbnail.path}/>
        <Card.Body>
          <Card.Title>{currentPage + index + 1} { '-' } {res.name}</Card.Title>
        </Card.Body>
      </Card>
      )



      // function Modal(props) {
      //   return (
      //     <Modal
      //       {...props}
      //       size="lg"
      //       aria-labelledby="contained-modal-title-vcenter"
      //       centered
      //     >
      //       <Modal.Header closeButton>
      //         <Modal.Title id="contained-modal-title-vcenter">
      //           Modal heading
      //         </Modal.Title>
      //       </Modal.Header>
            
      //       <Modal.Body>
      //         <h4>Centered Modal</h4>
      //         <p>
      //           Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
      //           dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
      //           consectetur ac, vestibulum at eros.
      //         </p>
      //       </Modal.Body>
            
            
      //       <Modal.Footer>
      //         <Button onClick={props.onHide}>Close</Button>
      //       </Modal.Footer>
      //     </Modal>
      //   );
      // }


      // const [modalShow, setModalShow] = React.useState(false);


        return ( 

            <CardGroup>
              { characterinfo}ß
            </CardGroup>

        )
    }
}


export default ComicsList;
