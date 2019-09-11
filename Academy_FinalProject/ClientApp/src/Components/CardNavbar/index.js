import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../Styles/style.css'

const cardNavbar = () => {

    const [isAccountClicked, setisAccountClicked] = useState(false);
    const [isSafetyClicked, setisSafetyClicked] = useState(false);
    const [isAboutClicked, setisAboutClicked] = useState(false);
    const [isContactCliced, setisContactCliced] = useState(false);
    return (
        <div className={'cardNavbar'}>
            <Link
                to="/account"
                className={isAccountClicked ? 'cardNavbarLinkActive' : 'cardNavbarLink'}
                onClick={() => { setisAccountClicked(!isAccountClicked) }}
            >
                My Account
            </Link>
            <Link
                to="/safety"
                className={isSafetyClicked ? 'cardNavbarLinkActive' : 'cardNavbarLink'}
                onClick={() => { setisSafetyClicked(!isSafetyClicked) }}
            >
                Safety
            </Link>
            <Link
                to="/about"
                className={isAboutClicked ? 'cardNavbarLinkActive' : 'cardNavbarLink'}
                onClick={() => { setisAboutClicked(!isAboutClicked) }}
            >
                About SQT
             </Link>
            <Link
                to="/contact"
                className={isContactCliced ? 'cardNavbarLinkActive' : 'cardNavbarLink'}
                onClick={() => { setisContactCliced(!isContactCliced) }}
            >
                Contact us
            </Link>
            <Link
                to="/"
            >
                APP
        </Link>
        </div>
    )
}
export default cardNavbar;