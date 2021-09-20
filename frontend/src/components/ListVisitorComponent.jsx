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
        return (
            <div className = "theLogTable">
                <h2 className="text-center">List of Visitors</h2> 
            <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead>

                            <tr>
                            <th>Visitor First Name</th>
                            <th>Visitor Last Name</th>
                            <th>Visitor Message</th>
                            <th>Actions</th>
                            </tr>

                        </thead>

                        <tbody>
                            {
                                this.state.visitors.map(
                                    visitor => 
                                    <tr key = {visitor.id}>
                                        <td> {visitor.firstName} </td>
                                        <td> {visitor.lastName} </td>
                                        <td> {visitor.message} </td>
                                    </tr>
                                )
                            }

                        </tbody>


                    </table>
            </div>

            </div>
        );
    }
}

export default ListVisitorComponent;