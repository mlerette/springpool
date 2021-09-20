import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import ListVisitorComponent from './components/ListVisitorComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';



function App() {
  return (
    <div>
       <Router> 
          
             <HeaderComponent />
                <div className="container">
                    <Switch> 
                        <Route path ="/" component = {ListVisitorComponent}></Route>
                        <Route path ="/visitors" component = {ListVisitorComponent}></Route>
                        <ListVisitorComponent />
                    </Switch>
                </div>
             <FooterComponent />
             
      </Router>
    </div>
  );
}

export default App;
