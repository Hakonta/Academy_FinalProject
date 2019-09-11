import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../Styles/style.css'
import ExitIcon from '../../Assets/exitIcon.png'
import { HeaderBar } from '../../Components/HeaderBar';

const cardNavbar = () => {

    return (
        <div className={'cardNavbar'}>
            <HeaderBar />
            <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
            <Link
                to="/account"
                className={'cardNavbarLink'}
            >
                Account
            </Link>
            <Link
                to="/safety"
                className={'cardNavbarLink'}>
                Safety
            </Link>
            <Link
                to="/about"
                className={'cardNavbarLink'}
            >
                SQT
             </Link>
            <Link
                to="/contact"
                className={'cardNavbarLink'}
            >
                Contact
            </Link>
            <Link
                to="/"
            >
                <img src={ExitIcon} className={'cardNavbarExitIcon'} />
            </Link>
        </div>
    )
}
export default cardNavbar;