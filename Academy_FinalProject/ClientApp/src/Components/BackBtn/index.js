import React from "react"
import mapIcon from '../../Assets/map.png'
import '../../Styles/style.css'

const BackToMap = (props) => {

    return (
        <div>
        <button
                style={{outline: "none", top:"1%", border: "0px"	}}
                className={'filterButton'}
            >
                <a href="/">
              <img src= {mapIcon} height="30px" alt="Back button icon"/>
              </a>
        </button>
        </div>
    )
}

export default BackToMap;