import React from 'react';

class Footer extends React.Component {

    render() {
      const { next, prev } = this.props;
        return (
      <footer class="page-footer font-small special-color-dark pt-4">
        <div class="container">
          <div class="row" style={{marginLeft: "400px"}}>
            <div class="col-md-4 mb-6">
              <button onClick={prev} class="btn btn-secondary" type="button">Prev</button>
            </div>
            <div class="col-md-4 mb-6">
              <button onClick={next} class="btn btn-secondary" type="button">Next</button>
            </div>
          </div>
        </div>
      </footer>
        )
    }
}


export default Footer;





















