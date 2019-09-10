import React from "react"
import "./sideNav.css"
import {Navbar, Button} from 'react-bootstrap';
import logo from '../../Assets/FullLogoOrange.png'


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
    let sideNavStyle = { width: showNav ? "70%" : "0"}
    
    return (
      
      <div style={{height: '100%', width: '100vw'}}>
      
         <Navbar expand="xl" className="open-nav">
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
          <a href="/account">My Account</a>
          <a href="/safety">Safety</a>
          <a href="/about">About SQT</a>
          <a href="/contact">Contact us</a>

        </div>
        <div i style ={{bsStyle:"default", border: '2px solid',
        borderColor: '#353a40',borderRadius: '10px 10px 10px 10px', color: '#ff7500',zIndex:'100'}} >

            <Button variant="outline-dark" variant="light" onClick={this.openNavClick}>
              <i style ={{fontSize:'35px', }} className="material-icons">
                menu
              </i>
            </Button>
        </div>
            
          </Navbar>
      </div>
    )
  }
}