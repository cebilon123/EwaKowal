import React from 'react'
import '../../styles/Button.css'

const Button = (props) => {
    return (
        <div className="Button">
            <p>{props.text}</p>
        </div>
    )
}

export default Button