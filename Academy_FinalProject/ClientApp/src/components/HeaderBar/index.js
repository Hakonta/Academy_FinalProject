import React from 'react';
import {Nav, Navbar, Button} from 'react-bootstrap';

const styles = {color: "white", height: "60px"}

export class HeaderBar extends React.Component {
 render() {
    return (
        <Navbar bg="dark" expand="xl">
          <Nav.Link href="bruker" style={styles}>
            <i class="material-icons">
            person
            </i>
        </Nav.Link>
        <Nav.Link href="/" style={styles}>
            <i class="material-icons">
            sentiment_satisfied_alt
            </i>
        </Nav.Link>
          <Nav.Link href="meny" style={styles}>
          <i class="material-icons">
            menu
            </i>
          </Nav.Link>
        </Navbar>
    );
  }
}
