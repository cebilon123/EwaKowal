import React from 'react'
import girl from '../assets/girl.webp'
import '../styles/Home.css'

const Home = () => {
    return (
        <div className="home">
            <h1 className="Home_p">
                Ewa Kowal - Fryzjerstwo i kosmetyka w Rzeszowie
            </h1>
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