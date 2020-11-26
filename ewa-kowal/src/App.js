import './App.css';
import React from 'react'
import Home from './components/Home'
import Toolbar from './components/Toolbar'
import About from './components/About'
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Prices from './components/Prices';
import Contact from './components/Contact'

function App() {
  return (
      <div className="App">
        <Toolbar/>
        <Home/>
        <About/>
        <Prices/>
        <Contact/>
        <MessengerCustomerChat
          pageId="494197140644733"
          appId="1310007462670322"
        />
      </div>
  );
}

export default App;