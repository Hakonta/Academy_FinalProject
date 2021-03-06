import React from "react"
import refresh from '../../Assets/refreshNew.png'
import '../../Styles/style.css'

const RefreshButton = (props) => {

    return (
        <button
                style={{outline: "none", top:"10%", background: "rgba(200, 54, 54, 0)", border: "0px", zIndex: 3}}
                className={'filterButton'}
            >
                <a href="/">
              <img src= {refresh} height="30px" alt="refresh icon"/>
              </a>
        </button>
    )
  }

  export default RefreshButton;