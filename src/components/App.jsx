import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
 
import Home from './Home';

 
function App(){
 
    return (
      <Router>
       {/*All our Routes goes here!*/}
       <Route  path="/" Components={Home} />
      </Router>
    );
  }

 
export default App;