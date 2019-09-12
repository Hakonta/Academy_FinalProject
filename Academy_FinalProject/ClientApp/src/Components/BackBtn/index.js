import React from "react"
import refresh from '../../Assets/refreshNew.png'
import '../../Styles/style.css'

const BackToMap = (props) => {

    return (
        <div>
        <button
                style={{outline: "none", top:"1%", border: "0px"	}}
                className={'filterButton'}
            >
                <a href="/">
              <img src= {refresh} height="30px"/>
              </a>
        </button>
        </div>
    )
}

export default BackToMap;