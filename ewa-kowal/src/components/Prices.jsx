import React from 'react'
import '../styles/Prices.css'

const Prices = (props) => {
    return (
        <div className="PricesContainer">
            <header>
                <p>Zabiegi</p>
            </header>
            <section className="AboutPricesContainer">
                <p>
                    Najczęściej wybierane zabiegi,
                    ułożone kategoriami aby było ci łatwiej
                </p>
            </section>
            <div className="PricesListBox">

            </div>

        </div>
    )
}

export default Prices