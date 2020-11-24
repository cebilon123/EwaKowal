import React from 'react'
import '../styles/Toolbar.css'
import Button from './reusable/Button.jsx'

const Toolbar = () => {
    return (
      <div className="toolbar">
        <div className="logo">EK</div>
          <ul>
            <li>
              <a>O nas</a>
            </li>
            <li>
              <a>Cennik</a>
            </li>
            <li>
              <Button text={"Kontakt"}/>
            </li>
          </ul>
      </div>
    )
  }

  export default Toolbar