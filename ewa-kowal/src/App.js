import './App.css';
import Home from './components/Home'
import Toolbar from './components/Toolbar'
import About from './components/About'
import MessengerCustomerChat from 'react-messenger-customer-chat';


function App() {
  return (
    <div className="App">
      <Toolbar/>
      <Home/>
      <About/>
      <MessengerCustomerChat
        pageId="494197140644733"
        appId="1310007462670322"
      />
    </div>
  );
}

export default App;