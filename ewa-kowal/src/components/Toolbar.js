import React from 'react'
import '../styles/Toolbar.css'
import Button from './reusable/Button.jsx'

const Toolbar = () => {
    return (
      <div>
        <div className="toolbar">
          <h1 className="logo"><b>EK</b></h1>
            <ul>
              <li>
                <a className="no_highlights">O nas</a>
              </li>
              <li>
                <a className="no_highlights">Cennik</a>
              </li>
              <li className="no_highlights">
                <Button text={"Kontakt"}/>
              </li>
            </ul>
        </div>
      </div>
    )
  }

  export default Toolbar