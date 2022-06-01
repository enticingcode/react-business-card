import React, { Component } from 'react'
import bioPic from "../images/bioPic.jpg"

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img width="300px" alt="portrait of marvin" src={bioPic} />
                <h1>Marvin Trujillo</h1>
                <h3>Frontend Web Developer</h3>
                <p>Technologies: HTML, CSS, JS, ReactJS,<br />Webpack, nodeJS</p>
            </div>
        )
    }
}

export default Header