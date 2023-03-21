import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark py-3">
                <div className="container-fluid">
                <strong><NavLink className="navbar-brand text-white bg-dark" to="/">CG-SCANNER</NavLink></strong>
                </div>
            </nav>
        </header>
    )
}

export default Navbar