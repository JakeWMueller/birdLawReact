import React, { useState } from 'react';
import Charlie from './Images/CharlieandMac.jpg';
import WantedBird from './Images/WantedBird.jpg';

function BirdButton() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                How many birds have committed illegal acts against you? Click for each one.
      </button>
            <p>You have {count} claim(s) to financial compensation</p>
        </div>
    );
}

function Home(){
    return(
        <main id="main">
            <div className="row">
                <div className="col-md-6 offset-md-1">
                    <div>
                        <img id="Charlie" src={Charlie} />
                    </div>
                    <div>
                        <p id="p1" style={{ fontSize: 'x-large' }}> We want to represent <b>YOU!</b></p>
                    </div>
                    <div id="birdbutton">
                        <div className="text">
                            <p className="text-decoration"> You! Yes. You! </p>
                            <p> Have you been personally victimized by a bird? <br /> If you answered yes, then you may be entitled to financial compensation.
                            <br /> DO NOT LET THE BIRDS GET AWAY WITH IT</p>
                            <BirdButton/>
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
                <img id="wanted-img" src={WantedBird} />
            </div>

        </main>
    )
};

export default Home;