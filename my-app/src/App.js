// import React, { Component } from react ;
// import './css/bootstrap.min.css';
import './main.css';

function App() {
  return (
    <div className="App">
      <div className="container one">
        <header>
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div button type="button" style={{float: 'right'}} className="btn btn-secondary btn-lg float-end">
                Login
              </div>
            </div>
            <div id="logo">
              <img src={require("./Images/MUELLER &TEGTMEYER.jpg")} />
            </div>
            <div>
              <hr id="hr1"/>
            </div>
            <div>
                <p id="header-text">  <a href="WHOWEARE.HTMl">[WHO WE ARE -</a> <a href="WHATWEDO.HTML"> WHAT WE DO - </a> <a href="NEWSEVENTS.HTML"> NEWS & EVENTS - </a> <a href="WHEREWEWORK.HTML"> WHERE WE WORK - </a> <a href="CONTACTUS.HTML">CONTACT US</a></p>
            </div>
            <div>
              <hr id="hr2"/>
            </div>
          </div>
        </header>
        <main>
          <div className="row">
            <div className="col-md-6 offset-md-1">
              <div>
                <img id="Charlie" src={require("./Images/Charlie and Mac.jpg")} />
              </div>
              <div>
                <p id="p1" style={{fontSize: 'x-large'}}> We want to represent <b>YOU!</b></p>
              </div>
              <div className="col offset-md-1">
                <div className="text">
                  <p className="text-decoration"> Welcome! </p>
                    <p> Have you been personally victimized by a bird? <br /> If you answered yes, then you may be entitled to financial compensation.
                      <br /> DO NOT LET THE BIRDS GET AWAY WITH IT</p>
                        <p className="text-decoration"> CALL NOW! </p>
                        <p id="results"> <em> Results may vary</em></p>
                </div>
              </div>
            </div>
          </div>




          <div className="row">
            <div className="col-md-8">
              <div className="Bird-para">
                    <p id="bird-facts"> Things you do not know about birds </p>
                    <p>1: Birds are in cahoot with lizards.</p>
                    <p>2: Birds dont have feathers, thats actually armour.</p>
                    <p>3: Birds are spying on you... always.</p>
                    <p>4: Birds spelled backwards is sdrib which isn't a good thing.</p>
                    <p>5: You swallow 7 birds per year in your sleep</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <p id="wanted">Have you seen this bird?</p>
            <img id="wanted-img" src={require("./Images/Wanted Bird.jpg")} />
          </div>

        </main>

        <footer id="footer">
                      <hr />
                        <a href="WHOWEARE.html" className="int">[WHO WE ARE - </a><a href="WHATWEDO.html" className="int">WHAT WE DO - </a><a href="NEWSEVENTS.html" className="int">NEWS & EVENTS - </a><a href="WHEREWEWORK.html" className="int">WHERE WE WORK -</a><a href="CONTACTUS.html" className="int">CONTACT US] </a>
                        <p><strong>&copy; 2021 Mueller & Tegtmeyer Law Group</strong></p> <br /> <br /> <br />
                          <p><em>"If you or a loved one has been diagnosed with Bird-Flu, you may be entitled to financial compensation."</em></p>
        </footer>
      </div>
    </div>
  );
}

export default App;
