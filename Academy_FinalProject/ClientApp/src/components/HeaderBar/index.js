import React from "react"
import "./sideNav.css"
import {Navbar} from 'react-bootstrap';
import logo from '../../Assets/FullLogoOrange.png'
import menu from '../../Assets/menu.png'
import {Link} from 'react-router-dom'
import '../../Styles/style.css'

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
      <Navbar expand="xl" className="open-nav">
        <div name="side-nav" className="side-nav" style={sideNavStyle}>
          <a href="/" onClick={this.closeNavClick} className="close-nav">
            &times;
          </a>
          <a>{<img src={logo} alt={''} height='60x' width='100px'/>}</a>
          <Link to="/account">My Account</Link>
          <Link to="/safety">Safety</Link>
          <Link to="/about">About SQT</Link>
          <Link to="/contact">Report a problem</Link>
        </div>
          <button
                onClick={this.openNavClick}
                style={{outline: "none", left: "3%", padding:"0"}}
                className={'filterButton'}>
                  
              <img src= {menu} height="45px"/>
            </button>
          </Navbar>
      
    )
  }
}