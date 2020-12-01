import './App.css';
import React from 'react'
import Home from './components/Home'
import Toolbar from './components/Toolbar'
import About from './components/About'
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Prices from './components/Prices';
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class App extends React.Component {
  
  componentDidMount() {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log('begin', arguments);
    });
 
    Events.scrollEvent.register('end', function(to, element) {
      console.log('end', arguments);
    });
 
    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    return (
      <div className="App">
        <Toolbar/>
        <Home/>
        <Element name="About">
          <About/>
        </Element>       
        <Element name="Prices">
          <Prices/>
        </Element>
        <Element name="Contact">
          <Contact/>
        </Element>
        <Footer/>
        <MessengerCustomerChat
          pageId="494197140644733"
          appId="1310007462670322"
          language="pl_PL"
          loggedInGreeting="Cześć! W czym możemy ci pomóc? :)"
        />
      </div>
  )
  }
}

export default App;