import React from 'react';
import { Navbar, Form, FormControl, Button, Nav } from "react-bootstrap";

class Header extends React.Component {

render() {
  
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">MarvelApp</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="#home">Favourite Characters</Nav.Link>
        </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Search Character" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    )
}


}

export default Header;
 