import React from "react"
import "./sideNav.css"
import {Navbar, Button} from 'react-bootstrap';
import Sidebar from "react-sidebar";
import logo from '../../Assets/SQT.png'
export class HeaderBar extends React.Component {
  state = {
    state: {
      showNav: false
    }
  }

  openNavClick = e => {
    e.preventDefault()
    this.openNav()
  }

  closeNavClick = e => {
    e.preventDefault()
    this.closeNav()
  }

  openNav = () => {
    this.setState({
      showNav: true
    })

    document.addEventListener("keydown", this.handleEscKey)
  }
  closeNav = () => {
    this.setState({
      showNav: false
    })

    document.removeEventListener("keydown", this.handleEscKey)
  }

  handleEscKey = e => {
    if (e.key === "Escape") {
      this.closeNav()
    }
  }

  render() {
    const { showNav } = this.state
    let navCoverStyle = { width: showNav ? "100%" : "0" }
    let sideNavStyle = { width: showNav ? "100%" : "0" }
    return (
      <React.Fragment>
         <Navbar bg="dark" expand="xl" class="open-nav">
         <div
          onClick={this.navCoverClick}
          class="nav-cover"
          style={navCoverStyle}
        />
        <div name="side-nav" class="side-nav" style={sideNavStyle}>
          <a href="#" onClick={this.closeNavClick} class="close-nav">
            &times;
          </a>
          <a>{<img src={logo} height='40px' width='40px'/>}</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
        <Button variant="dark" onClick={this.openNavClick}>
          <i class="material-icons">
            person
          </i>
           </Button>
        <Button variant="dark" href="/">
        {<img src={logo} height='40px' width='40px'/>}
          </Button>
            <Button variant="dark">
          <i class="material-icons">
            menu
          </i>
          </Button>
          </Navbar>
      </React.Fragment>
    )
  }
}
