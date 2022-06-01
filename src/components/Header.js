import React, { Component } from 'react'
import bioPic from "../images/bioPic.jpg"
import linkedLogo from "../images/linked.svg"
import emailLogo from "../images/email.svg"


class Header extends Component {
    render() {
        return (
            <div className="header">
                <img width="300px" alt="portrait of marvin" src={bioPic} />
                <h1>Marvin Trujillo</h1>
                <h3>Frontend Web Developer</h3>
                <p>Technologies:<br /> HTML, CSS, JS, ReactJS,<br />Webpack, nodeJS</p>
                <div id="btnContainer">
                    <button> <img src={emailLogo} />Email</button>
                    <form target="_blank" action="https://www.linkedin.com/in/marvin-trujillo-b18b84132" method="get">
                        <button><img src={linkedLogo} />LinkedIn</button>
                    </form>
                </div>
            </div >
        )
    }
}

export default Header