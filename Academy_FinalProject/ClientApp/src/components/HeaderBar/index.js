import React from "react"
import "./sideNav.css"
import {Navbar, Button} from 'react-bootstrap';
import logo from '../../Assets/FullLogo.png'
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

  render() {
    const { showNav } = this.state
    let navCoverStyle = { width: showNav ? "70%" : "0" }
    let sideNavStyle = { width: showNav ? "70%" : "0" }
    return (
      
      <div style={{height: '100%', width: '100vw'}}>
      
         <Navbar bg="dark" expand="xl" className="open-nav">
         <div
          onClick={this.navCoverClick}
          className="nav-cover"
          style={navCoverStyle}
        />
        <div name="side-nav" className="side-nav" style={sideNavStyle}>
          <a href="/" onClick={this.closeNavClick} className="close-nav">
            &times;
          </a>
          <a>{<img src={logo} alt={''} height='60x' width='100px'/>}</a>
          <h5>Hi Cez!</h5>
          <a href="/myAccount">My Account</a>
          <a href="/MyCardDetails">My Card Details</a>
          <a href="/MyRideHistory">My Ride History</a>
          <a href="/ContactUs">Contact us</a>
          <a href="/AboutUs">About us</a>
        </div>
            <Button variant="dark"  onClick={this.openNavClick}>
              <i style ={{fontSize:'42px'}} className="material-icons">
                menu
              </i>
            </Button>
      
            <Button variant="dark" href="/">
              {<img src={logo} alt={''} height='40px' width='80px'/>}
            </Button>
            
          </Navbar>
      </div>
    )
  }
}