import React from 'react'
import girl from '../assets/girl.png'
import '../styles/Home.css'

const Home = () => {
    return (
        <div className="home">
            <p className="Home_p">
                Ewa Kowal - Fryzjerstwo i kosmetyka w Rzeszowie
            </p>
            <div className="imagebox">
                <div className="imageContainer">
                    <img src={girl}/>
                </div>
                <div className="square"></div>
            </div>
        </div>
    )
}

export default Home