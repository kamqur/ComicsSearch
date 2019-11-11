import React, { Component } from 'react';

class Favourite extends Component {
  render() {
    const { commics } = this.props
    return (
        <div>
          <h2>Favourite Characters</h2>
          <div className="comics-charaters">
            {
              commics.map( (comic) => 
              <div>
                {comic.name}
              </div>
              )
            }
          </div>
        </div>
    );
  }
}

export default Favourite;






































