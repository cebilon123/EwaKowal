import './App.css';
import Home from './components/Home'
import Toolbar from './components/Toolbar'
import About from './components/About'


function App() {
  return (
    <div className="App">
      <Toolbar/>
      <Home/>
      <About/>
    </div>
  );
}

export default App;