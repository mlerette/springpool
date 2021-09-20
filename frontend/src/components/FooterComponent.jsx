import React, { Component } from 'react';

class FooterCompnent extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>
                <footer className = "footer">
                    <span className="text-muted">Matt's Web App 9/2021</span> 
                </footer>
            </div>
        );
    }
}

export default FooterCompnent;