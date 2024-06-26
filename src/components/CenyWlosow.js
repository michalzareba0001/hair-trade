import React from 'react'
import './CenyWlosow.scss'
const CenyWlosow = () => {
    return (
        <div className='Hair-trade-ceny-wlosow'>
            <h2>Orientacyjne ceny włosów</h2>
            <div className='two-columns'>
                <div className='col-one'>
                    <table cellPadding={0} cellSpacing={0}>
                        <tbody>
                        <tr><th>Długość włosów</th><th>Cena</th></tr>
                        <tr><td>40-44 cm</td><td>4000- 5200 zł kg</td></tr>
                        <tr><td>45-49 cm</td><td>5000- 7000 zł kg</td></tr>
                        <tr><td>50-54 cm</td><td>5500- 9200 zł kg</td></tr>
                        <tr><td>55-60 cm</td><td>7700- 11300 zł kg</td></tr>
                        <tr><td>60+ cm</td><td>8000- 12300 zł kg</td></tr>
                        <tr><td>70+ cm</td><td>9000- 15300 zł kg</td></tr>
                        <tr><td>80+ cm</td><td>9300- 20000 zł kg</td></tr>
                        </tbody>
                    </table>
                </div>
                <div className='col-two'>
                    <h3>Dlaczego Cena włosów o tej samej długości tak bardzo się różni?</h3>
                    <p>Każdy z nas jest wyjątkowy, dlatego nasze włosy się różnią! Włosy z jednego cięcia wyceniamy indywidualnie. Na cenę włosów mają wpływ takie czynniki jak: długość, kolor, porowatość, puszystość lub jej brak, suchość, rozdwojone lub całe końcówki, a także, czy włosy są żywe, czy wyglądają na „martwe”. Cena włosów jasnych oraz blond zawsze jest wyższa.</p>
                    <button className='Hair-trade-btn-one'>
                        Szybka wycena
                    </button>
                    <div id='proces-sprzedazy'>
                        
                    </div>
                </div>
            </div>
            <h2 className='jak-przebiega-sprzedaz' >Jak przebiega sprzedaż?</h2>
        </div>

    )
}

export default CenyWlosow