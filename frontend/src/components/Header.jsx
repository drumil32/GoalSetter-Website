import React from 'react';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';

function Header() {
    return (
        <>
            <header className="header">
                <div className="logo">
                    <ul>
                        <li>
                            <Link to="/login">
                                <FaSignInAlt />Login
                            </Link>
                        </li>
                        <li>
                            <Link to="/register">
                                <FaUser />Register
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>
            <Outlet/>
        </>
    )
}

export default Header