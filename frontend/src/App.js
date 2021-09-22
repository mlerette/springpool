import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import ListVisitorComponent from './components/ListVisitorComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';


(function() {
  var childProcess = require("child_process");
  var oldSpawn = childProcess.spawn;
  function mySpawn() {
      console.log('spawn called');
      console.log(arguments);
      var result = oldSpawn.apply(this, arguments);
      return result;
  }
  childProcess.spawn = mySpawn;
})();

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
