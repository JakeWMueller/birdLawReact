import BirdLawPoster from './Images/BirdLawPoster.jpg';
import Attorneys from './Images/sub-01-attorneys.jpg';
import Mugshot from './Images/Charlie.jpg';
import Mac from './Images/Mac.jpg';
import Dennis from './Images/Dennis.jpg';
import Dee from './Images/Dee.jpg';

function WhoWeAre(){
    return(
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-md-1 offset-md-1">
                        <div className="who-we-are">
                            <div id="who-we-are-box">
                                <p id="who-title"> WHO WE ARE </p>
                                <p>Criminal history <br/> <br/> Cases <br/> <br/> DNA results <br/> <br/> Licenses <br/> <br/> Childhood bird trauma stories</p>
                                <img id="poster" src={BirdLawPoster}/>
                                    <p style={{ fontSize: 'large', textAlign: 'left'}}>Contact us <br/> For all your bird law questions.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 offset-md-2">
                        <img id="attorney" src={Attorneys}/>
                        <img className="mugshot" src={Mugshot}/> Charlie and Mac
                        <img className="mugshot" src={Mac}/>
                        <img className="mugshot" src={Dennis}/> Dennis and Dee
                        <img id="dee" src={Dee}/>
                    </div>
                </div>          
            </div>
                
        </main>
    )
};

export default WhoWeAre;