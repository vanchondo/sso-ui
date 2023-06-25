
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './component/Register';
import Validate from './component/Validate';
import Login from './component/Login';
import Header from './views/header/HeaderView'
import './App.css';

const App = () => {
  const [message, setMessage] = useState({});

    return (
      <Router>
        <div className="App">
          <Header message={message} setMessage={setMessage}/>
          <div className='container'>
            <Routes>
              <Route exact path='/' element={< Login setMessage={setMessage} />}></Route>
              <Route exact path='/register' element={< Register setMessage={setMessage} />}></Route>
              <Route exact path='/validate' element={< Validate setMessage={setMessage} />}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    );
}

export default App;