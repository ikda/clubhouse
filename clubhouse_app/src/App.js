import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import MyProfileSetting from './components/pages/MyProfileSetting';

const App = () => (
  <div className = "ui container">
    <Route path = "/" exact component = {HomePage}/>
    <Route path = "/MyProfileSetting" exact component = {MyProfileSetting}/>
  </div>
);





export default App;
