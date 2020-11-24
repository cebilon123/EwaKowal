import React from 'react'
import '../styles/Toolbar.css'

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
              <a>Kontakt</a>
            </li>
          </ul>
      </div>
    )
  }

  export default Toolbar