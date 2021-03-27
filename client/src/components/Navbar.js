import React, { useState } from 'react'
import logo from '../images/logo.svg';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                   {/* <Link to="/"><img src="https://images.vexels.com/media/users/3/136203/isolated/preview/c40fc7e71e6332611bc3cb464468c6fd-hotel-building-cartoon-by-vexels.png" width={50} height={100} alt="beach" /></Link> */}
                    <button type="button" className="nav-btn">
                        <FaAlignRight className="nav-icon" />
                    </button>
                </div>
            </div>
            {/* <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/rooms">Room Service</Link>
                </li>
            </ul> */}
       
        </nav>
    )
}
