import React from 'react';
import {CardGroup,Card} from 'react-bootstrap';

class ComicsList extends React.Component {

  render() {
    const { commics, currentPage, selectActiveComic} = this.props;
    const characterinfo = commics.map((res, index) => 
    <Card onClick={ () => selectActiveComic(res) } >
      <Card.Body>
        <Card.Title>{currentPage + index + 1} { '-' } {res.name}</Card.Title>
      </Card.Body>

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