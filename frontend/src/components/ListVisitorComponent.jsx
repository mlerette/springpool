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
                <div className = "logTableHeader">
                <h2 className="text-center">Kritter: Send a Kreet to Kreeto</h2> 
                    <h3 className="text-center">Leave Messages to Help Kreeto on their Journey!</h3>
                    </div>
            <div className = "row">
                 <table className = "table table-striped table-bordered">

                    <div className = "kritterHead">
                        <thead>
                            {

                        this.state.visitors.map(
                                    visitor => 
                                    <th key = {visitor.id}>
                                <th>{visitor.firstName}</th>
                                <th>{visitor.lastName}</th>
                            </th>
                        )
                            }
                            
                        </thead>
                        </div>

                    <div className="kritterBody">
                        <tbody>
                            {
                                this.state.visitors.map(
                                    visitor => 
                                    <tr key = {visitor.id}>
                                        <td> {visitor.message} </td>
                                        <td> {visitor.likes} </td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </div>


                </table>
                    
            </div>

            </div>
        );
    }
}

export default ListVisitorComponent;