import React from 'react'
import '../styles/About.css'
import PersonInfo from './reusable/PersonInfo.jsx'

const About = () => {
    return (
        <div className="About">
            <section className="Header">
                <p className="Title">O nas</p>
                <p className="Text">
                    Nasz salon powstał ponad 20 lat temu i od tamtego czasu 
                    zaufało nam setki klientów!
                </p>              
            </section>
            <section className="PersonInformation">
                <div>
                    <p className="PersonName">Ewa Kowal</p>
                    <PersonInfo image="https://picsum.photos/500" text="Jakiś przykładowy tekst który zajemie ileś lini i po polsku żebym ogarnął gdzie się kończą linie i w ogóle. Tutaj Ewa Kowal najlepszy gabinet kosmetyczny ever, wieć zapraszamy, wbijać, mam dwadzieścia lat doświadczenia co znaczy że jestem najlepsza w Rzeszowie. Mam kota, psa, myszy, ryby a nawet kury które są fajneJakiś przykładowy tekst który zajemie ileś lini i po polsku żebym ogarnął gdzie się kończą linie i w ogóle. Tutaj Ewa Kowal najlepszy gabinet kosmetyczny ever, wieć zapraszamy, wbijać, mam dwadzieścia lat doświadczenia co znaczy że jestem najlepsza w Rzeszowie. Mam kota, psa, myszy, ryby a nawet kury które są fajne"/>
                </div>
                <div>
                    <p className="PersonName">Anna Charkot</p>
                    <PersonInfo isLeft={true} image="https://picsum.photos/500" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum"/>
                </div>
                <div>
                    <p className="PersonName">Karolina Skrobacz</p>
                    <PersonInfo image="https://picsum.photos/500" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum"/>
                </div>
            </section>
                <div className="Background"/>
        </div>
    )
}

export default About