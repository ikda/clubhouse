import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Profile from './components/pages/Profile';
import MyProfileSetting from './components/pages/MyProfileSetting';

const App = () => (
  <div className = "ui container">
    <Route path = "/" exact component = {Profile}/>
    <Route path = "/MyProfileSetting" exact component = {MyProfileSetting}/>
  </div>
);





export default App;
