import React from 'react'
import girl from '../assets/girl.png'
import '../styles/Home.css'

const Home = () => {
    return (
        <div className="home">
            <p className="Home_p">
                Stworzymy idealną fryzurę i zajmiemy się twoją cerą
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