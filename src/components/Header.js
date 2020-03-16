import React from 'react';
import { NavLink } from 'react-router-dom'

export default () => {
    return(
        <div className="header-bar">
            <h1 className="name">RYAN ZIEGENFUS</h1>
            <div className="forBar">
                <div className="navs">
                    <NavLink className="link about" to="/">About</NavLink>
                    <NavLink className="link projects" to="/projects">Projects</NavLink>
                    <NavLink className="link resume" to="/resume">Resume</NavLink>
                    <NavLink className="link contact" to="/contact">Contact</NavLink>
                </div>
                <hr />
            </div>
        </div>
    )
}