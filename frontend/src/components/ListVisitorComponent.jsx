import React, { Component } from 'react';
import VisitorService  from '../services/VisitorService';

class ListVisitorComponent extends Component {
        constructor(props) {
            super(props) 
//we are going to make a call to the REST API and store it in the visitor array 
            this.state = {
                    visitors: [] 
            }
}

    componentDidMount(){  
        VisitorService.getVisitors().then((res) => {
            this.setState({ visitors: res.data});

        });

    }

    render() {


        var visitors = this.state.visitors.map((value, index) => (
            <OneElement key={visitor.id} firstName={visitor.firstName} lastName={visitor.lastName}  likes={visitor.likes} />
         ));

        return (
            <div>
            <h1>Visitors</h1>
            <table id="visitors">
                <tr>
                    <th>visitors</th>
                    <th>messages</th>
                    <th></th>
                    <th></th>
                </tr>
                <tbody>
                   {visitors}
                </tbody>
            </table>
        </div>
        );
    }
}

export default ListVisitorComponent;