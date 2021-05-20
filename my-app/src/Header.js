import React, { Component } from "react";
import MuellerTegtmeyer from './Images/MUELLER&TEGTMEYER.jpg';
import WhoWeAre from './WhoWeAre.js';

class Welcome extends Component {
    render() {
        return <h1>Welcome to the Birdhouse.</h1>;
    }
};

function Header(){
    return (
    
        <div className="row">
            <div className="col-md-10 offset-md-1">
                <div button type="button" style={{ float: 'right' }} className="btn btn-secondary btn-lg float-end">
                    Login
                </div>
            </div>
            <div id="logo">
                <Welcome />
                <img src={MuellerTegtmeyer} />
            </div>
            <div>
                <hr id="hr1" />
            </div>
            <div>
                <p id="header-text">  <a href={WhoWeAre}>[WHO WE ARE -</a> <a href="WHATWEDO.HTML"> WHAT WE DO - </a> <a href="NEWSEVENTS.HTML"> NEWS & EVENTS - </a> <a href="WHEREWEWORK.HTML"> WHERE WE WORK - </a> <a href="CONTACTUS.HTML">CONTACT US</a></p>
            </div>
            <div>
                <hr id="hr2" />
            </div>
        </div>
    )
};

export default Header;