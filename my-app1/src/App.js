import React from 'react';
import './App.css';
import Header from './componets/Header';
import Nav from './componets/Nav';
import Profile from './componets/Profile';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <Profile />
    </div>
  );
};

export default App;
