import React from "react"
import refresh from '../../Assets/refresh.png'
import '../../Styles/style.css'

const RefreshButton = (props) => {

    return (
        <button
                style={{outline: "none", top:"10%", background: "rgba(200, 54, 54, 0)", border: "0px"	}}
                className={'filterButton'}
            >
                <a href="/">
              <img src= {refresh} height="30px"/>
              </a>
        </button>
    )
  }

  export default RefreshButton;