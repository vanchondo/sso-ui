
import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Register from './component/Register';
import Login from './component/Login';
import './App.css';
  
class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
           <Routes>
                 <Route exact path='/' element={< Login />}></Route>
                 <Route exact path='/register' element={< Register />}></Route>
          </Routes>
          </div>
       </Router>
   );
  }
}
  
export default App;