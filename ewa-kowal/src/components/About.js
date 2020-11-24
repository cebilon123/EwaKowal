import React from 'react'
import '../styles/About.css'
import PersonInfo from './reusable/PersonInfo.jsx'

const About = () => {
    return (
        <div className="About">
            <section className="Header">
                <p className="Title">O nas</p>
                <p className="Text">
                    Nasz gabinet powstał prawie 20 lat temu i od tamtego czasu 
                    ciągle działamy i pomagamy
                </p>
                <PersonInfo>
                    <PersonInfo.Text>
                        <div>
                        Teraz test
                        </div>
                    </PersonInfo.Text>
                    <PersonInfo.Image>
                        <div>
                            tutaj niby jakiś image ale na razie test
                        </div>
                    </PersonInfo.Image>
                </PersonInfo>
            </section>
        </div>
    )
}

export default About