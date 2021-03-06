import React from "react"
import "./sideNav.css"
import logo from '../../Assets/newLogo.png'
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
    //let navCoverStyle = { width: showNav ? "70%" : "0" }
    let sideNavStyle = { width: showNav ? "70%" : "0" }

    return (
      <div>
        <div name="side-nav" className="side-nav" style={sideNavStyle}>
          <a href="/" onClick={this.closeNavClick} className="close-nav">
            &times;

          </a>
          <a href="/">{<img src={logo} alt={''} height='60x'/>}
          </a>
          <br></br>
          <Link to="/">Find ride</Link>
          <Link to="/account">My Account</Link>
          <Link to="/safety">Safety</Link>
          <Link to="/about">About SQT</Link>
          <Link to="/contact">Report a problem</Link>
        </div>
          <button
                onClick={this.openNavClick}
                style={{outline: "none", left: "3%", padding:"0", zIndex: 3}}
                className={'filterButton'}>
                  
              <img src= {menu} height="45px" alt="menu icon"/>
            </button>
      </div>
    )
  }
}