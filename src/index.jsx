import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Switch, Link, useParams } from 'react-router-dom';
import Login from './Login.jsx'
import Home from './Home.jsx'

class App extends React.Component {
    constructor(props) {
      super(props);
    }
      render() {
          return(
           <BrowserRouter>
              <div>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route exact path="/login" element={<Login />} />
              </Routes>
              </div>
          </BrowserRouter>
  
          )
      }}

  
  const root = ReactDOM.createRoot(document.querySelector("#app"));
  root.render(<App/>);