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
                                
                            <div>
                                    <a className="headerTitle">Matt's Webapp v2 9/18/21</a>   
                            </div> 
                            
                        </div>
                             <div className="subHeader">
                                    <h1>buttons buttons buttons</h1>
                             </div>   
                             <div className="welcomeMess">
                                     <h2>Hello, thank you for visiting, please sign the visitor log below to see if it works!</h2>
                                     <h3>-matt</h3>     
                            </div>    

                    </nav>
                </header>
             
            </div>
        );
    }
}

export default HeaderComponent;