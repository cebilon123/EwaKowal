import React, { Component } from 'react'
import '../styles/About.css'
import PersonInfo from './reusable/PersonInfo.jsx'
import acharkot from '../assets/acharkot.webp'
import ekowal from '../assets/ekowal.webp'
import pskrobacz from '../assets/pskrobacz.webp'
import descriptions from '../assets/descriptions.json'

class About extends React.Component{   
    render() {
        return (
            <div className="About">
                <section className="Header">
                    <p className="Title">O nas</p>
                    <p className="Text">
                        Gabinet kosmetyczno-fryzjerski Kowal Ewa powstał ponad 20 lat temu i od tamtego czasu 
                        zaufało nam setki klientów!
                    </p>              
                </section>
                <section className="PersonInformation">
                    <div>
                        <p className="PersonName">Ewa Kowal</p>
                        <PersonInfo image={ekowal} text={descriptions.Ewa}/>
                    </div>
                    <div>
                        <p className="PersonName">Anna Charkot</p>
                        <PersonInfo isLeft={true} image={acharkot} text={descriptions.Ania}/>
                    </div>
                    <div>
                        <p className="PersonName">Karolina Skrobacz</p>
                        <PersonInfo image={pskrobacz} text={descriptions.Karolina}/>
                    </div>
                </section>
                    <div className="Background"/>
            </div>
        )
    }

}

export default About