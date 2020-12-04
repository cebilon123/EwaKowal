import React from 'react'
import { Link } from 'react-scroll'
import '../styles/Toolbar.css'
import Button from './reusable/Button.jsx'

class Toolbar extends React.Component {


  render() {
    return (
      <div>
        <div className="toolbar">
          <h1 className="logo"><b>Twoja kosmetyczka i fryzjerka</b></h1>
            <ul>
              <li>
                <Link to="About" smooth={true}>
                  <a className="no_highlights">O nas</a>
                </Link>          
              </li>
              <li>
                <Link to="Prices" smooth={true}>
                  <a className="no_highlights">Cennik</a>
                </Link>           
              </li>
              <li className="no_highlights" >
                <Link to="Contact" smooth={true}>
                  <Button text={"Kontakt"}/>
                </Link>             
              </li>
            </ul>
        </div>
      </div>
    )
  }
  }

  export default Toolbar