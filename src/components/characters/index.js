import React from 'react';
import axios from 'axios';
import {CardGroup,Card} from 'react-bootstrap';
//import Modal from '../Modal'

class ComicsList extends React.Component {


    constructor(props) {
      super(props)
      this.state = {
          data:[]
        
      }
    }

    componentDidMount(){
      axios.get('https://gateway.marvel.com/v1/public/characters?ts=1565922410&apikey=6a038473ffd6407750a2ea27115f7e7c&hash=1492df65a88ef98a1a279719fe509f72')
        .then(res => {
          const data = res.data.data.results
          this.setState({data});
        })

    }


    render() {

      const characterinfo = this.state.data.map((res) => 
      <Card>
      <Card.Img variant="top" src={res.thumbnail.path}
                 />
      <Card.Body>
        <Card.Title>{res.name}</Card.Title>
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
              {characterinfo}
            </CardGroup>

        )
    }
}


export default ComicsList;
