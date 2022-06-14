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
                <div className="btnContainer">
                    <form action="mialto:trujillomarvin@hotmail.com">
                        <button> <img src={emailLogo} /></button>
                    </form>
                    <form target="_blank" action="https://www.linkedin.com/in/marvin-trujillo-b18b84132" method="get">
                        <button><img src={linkedLogo} /></button>
                    </form>
                </div>
            </div >
        )
    }
}

export default Header