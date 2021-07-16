
import React from 'react'
import '../components/NavBar.css';
import logo from './band.png'


export const NavBar = () => {
    return (
        <nav className="navbar navbar-light bg-light bg-transparent m-5">
            <div className="container-fluid">
                <div className="nav-brand mb-3"><img src={logo} alt=""></img></div>
                <form className="d-flex border rounded-pill shadow-sm">
                <input className="form-control border-0 bg-transparent btnf" type="search" placeholder="Location" aria-label="Search"/>
                    <input className="form-control bg-transparent border-0 border-end border-start btnf " type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn " type="submit"><i className="fas fa-search"></i></button>
                </form>
        </div>
      </nav>
            )
}
