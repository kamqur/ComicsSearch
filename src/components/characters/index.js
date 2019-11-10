import React from 'react';
import {CardGroup,Card,Modal,Button} from 'react-bootstrap';
import CharacterInfo from '../modal/index';

class ComicsList extends React.Component {

    render() {

      const { commics, currentPage,handleShowModal,handleHideModal,showModal} = this.props;
      const characterinfo = commics.map((res, index) => 
      <Card>
        <Card.Body>
          <Card.Title onClick={handleShowModal}>{currentPage + index + 1} { '-' } {res.name}</Card.Title>
        </Card.Body>

        <CharacterInfo show={showModal} 
                       handleHideModal={handleHideModal}
                       name={res.name}                    
                     />
      </Card>
      )
      
        return ( 
          <div>
            <CardGroup>
              { characterinfo}
            </CardGroup>

          </div>
          )

    }
}


export default ComicsList;