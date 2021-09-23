import React, { Component } from 'react';


class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>

               
                <header>
                    <nav className="header">
                        <div className="header header-welcome">

                            <div className="alienHeader">
                                   <img src="/images/AlienHeader1.png"  width="100" height="100"alt="Alien"/>
                            </div>

                                    <p className="headerTitle">Kreeto-Verse</p>   
                                    <p className="headerIntro">Kreeto is a purple alien forever wandering the empty spaces of its universe...</p>       
                            
                        
                        </div>
                             <div className="subHeader">
                                <button id="myBtn">Post</button> 
                               
                             </div>   
                             <div className="welcomeMess">
                                     <h2>I am working on Kritter so you can send Kreeto messages!</h2>
                                     <h3>-matt</h3>     
                            </div>    

                    </nav>
                </header>
             
            </div>
        );
    }
}

export default HeaderComponent;