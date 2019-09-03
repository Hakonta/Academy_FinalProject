import React from 'react';
import {Navbar, Button} from 'react-bootstrap';
import Sidebar from "react-sidebar";

export class HeaderBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
 
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

 
 render() {
    return (
      <div>
        <Sidebar
          sidebar={<div><i class="material-icons">
          sentiment_satisfied_alt
        </i>
        <p>Sidebar</p>
        <p>Sidebar2</p>
        <p>Sidebar3</p></div>}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{ sidebar: { background: "#353a40", color: "white", width:"300px", fontSize: '30px', textAlign: 'center'}}}
        >
        <Navbar bg="dark" expand="xl">
        <Button variant="dark" onClick={() => this.onSetSidebarOpen(true)}>
          <i class="material-icons">
            person
          </i>
           </Button>
        <Button variant="dark" href="/">
          <i class="material-icons">
            sentiment_satisfied_alt
           </i>
          </Button>
            <Button variant="dark">
          <i class="material-icons">
            menu
          </i>
          </Button>
          </Navbar>
          </Sidebar>
        </div>

      
    );
  }
}
