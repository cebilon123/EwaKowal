import './App.css';
import React from 'react'
import Home from './components/Home'
import Toolbar from './components/Toolbar'
import About from './components/About'
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Prices from './components/Prices';

function App() {
  return (
      <div className="App">
        <Toolbar/>
        <Home/>
        <About/>
        <Prices/>
        <MessengerCustomerChat
          pageId="494197140644733"
          appId="1310007462670322"
        />
      </div>
  );
}

export default App;