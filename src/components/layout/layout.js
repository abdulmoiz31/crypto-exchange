import React, { Component } from 'react'
import { Outlet, Link } from "react-router-dom";

export default class layout extends Component {
  render() {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand pl-5" href="#">Crypto Exchange</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to="/dashboard">Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About Us</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/signup"> Sign Up</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Logout</Link>
                </li>
                </ul>
                
            </div>
        </nav>
        <Outlet/>
        </div>
    )
  }
}
