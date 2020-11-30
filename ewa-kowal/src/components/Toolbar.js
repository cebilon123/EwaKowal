import React from 'react'
import '../styles/Toolbar.css'
import Button from './reusable/Button.jsx'

const Toolbar = () => {
    return (
      <div>
        <div className="toolbar">
          <h1 className="logo"><b>Ewa Kowal</b></h1>
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
      </div>
    )
  }

  export default Toolbar