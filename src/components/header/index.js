import React from 'react';
import { Navbar, Form, Nav } from "react-bootstrap";
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import {Link} from 'react-router-dom';

class Header extends React.Component {

render() {
    const { options, search } = this.props;
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">MarvelApp</Navbar.Brand>
        <Nav className="mr-auto">
           <Link to={'/favourite'} className="nav-link">Favourite Characters</Link>
        </Nav>
        <Form inline>
            <Typeahead
                onChange={search}
                options={options}
                placeholder="Search Character"
            />
        </Form>
         
      </Navbar>
    )
}


}

export default Header;