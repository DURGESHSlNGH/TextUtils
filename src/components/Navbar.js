import React from 'react'
import {
    Link
  } from "react-router-dom";

export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
                <div className={"container-fluid"}>
                    <a className={`navbar-brand text-${props.mode === 'black' ? 'light' : 'black'}`} href="/">{props.title}</a>
                    <button className="navbar-toggler" style = {{backgroundColor: props.mode === 'black' ? 'white': 'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link active text-${props.mode === 'black' ? 'light' : 'black'}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link text-${props.mode === 'black' ? 'light' : 'black'}`} to="/about">About</Link>
                            </li>
                        </ul>
                        {/* <form className="d-flex mx-1" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className={`btn btn-${props.mode === 'black' ? 'light' : 'dark'}`} type="submit">Search</button>
                        </form> */}
                <div className="form-check form-switch mx-1 my-2" >
                    <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
                    <label className={`form-check-label text-${props.mode === 'black' ? 'light' : 'black'}`} htmlFor="flexSwitchCheckDefault">{props.modeName}</label>
                </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
