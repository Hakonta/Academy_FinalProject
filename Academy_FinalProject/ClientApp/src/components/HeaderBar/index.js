import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';

const styles = {color: "white"}

export class HeaderBar extends React.Component {
 render() {
    return (
        <Navbar bg="dark" expand="lg">
          <Nav.Link href="bruker" style={styles}>Bruker</Nav.Link>
          <Navbar.Brand href="/">
            <img
            src='https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/scooter.png'
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
            />
    </Navbar.Brand>
          <Nav.Link href="meny" style={styles}>Meny</Nav.Link>
        </Navbar>
    );
  }
}
