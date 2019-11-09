import React from 'react';
import axios from 'axios';
import {CardGroup,Card,Modal,Button} from 'react-bootstrap';
import CharacterDetail from './CharacterDetail';

class ComicsList extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
          data:[],
          showModal:false
        
      }

      this.handleHideModal = this.handleHideModal.bind(this);

      this.handleShowModal = this.handleShowModal.bind(this);
    }


    handleHideModal(){
      this.setState({showModal: false})
    }


    handleShowModal(){
        this.setState({showModal: true})
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
      <Card.Img variant="top" src={res.thumbnail.path}/>
      <Card.Body>
        <Card.Title onClick={this.handleShowModal}>{res.name}</Card.Title>
           <CharacterDetail show={this.state.showModal}
                             onHide={this.handleHideModal}/>
      </Card.Body>
    </Card>
      )

        return ( 
         <div>
            <CardGroup>
              {characterinfo}
            </CardGroup>
         </div>
        )
    }

}


export default ComicsList;
