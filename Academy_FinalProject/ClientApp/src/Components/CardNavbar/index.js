import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../Styles/style.css'
import ExitIcon from '../../Assets/exitIcon.png'

const cardNavbar = () => {

    return (
        <div className={'cardNavbar'}>
            <Link
                to="/account"
                className={'cardNavbarLink'}
            >
                My Account
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
                About SQT
             </Link>
            <Link
                to="/contact"
                className={'cardNavbarLink'}
            >
                Contact us
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