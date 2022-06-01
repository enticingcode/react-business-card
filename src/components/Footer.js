import React, { Component } from 'react'
import githubImg from "../images/github.svg"
import instaImg from "../images/instagram.svg"
import tweetImg from "../images/twitter.svg"


class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <div id="footerLinks">
                    <form target="_blank" action="https://github.com/enticingcode" method="get"><button><img src={githubImg}></img></button></form>
                    <form target="_blank" action="https://www.instagram.com/marv.lexis/"><button><img src={instaImg}></img></button></form>
                    <form target="_blank" action="https://twitter.com/marv_lexi"><button><img src={tweetImg}></img></button></form>
                </div>
                <div id="copyright">
                    <p>Copyright @Trujillo -- Site powered by Reactjs</p>
                </div>
            </div>
        )
    }
}

export default Footer