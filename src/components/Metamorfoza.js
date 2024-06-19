import React, { useState, useEffect, useRef } from 'react';
import './Metamorfoza.scss';

const Metamorfoza = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isInvisible, setIsInvisible] = useState(1);
    const metamorfozaListRef = useRef(null);

    useEffect(() => {
        let count = 0;
        const interval = setInterval(() => {
            setScrollPosition(prevPosition => prevPosition - 40);
            count++;
            
            if (count === 7) {
                setIsInvisible(0);
                setScrollPosition(0);
                setTimeout(() => {
                setIsInvisible(1);
                    count = 0;
            }, 400);
            }
        }, 1200);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='Hair-trade-metamorfoza'>
            <h2 className='Metamorfoza-title'>Jesteś posiadaczką długich włosów a masz zamiar przejść metamorfozę?</h2>
            <div className='Hair-trade-two-columns Hair-trade-content-box'>
                <div className='col-one'>
                    <p className='metamorfoza-text'>Skontaktuj się z nami bo mało która osoba wie ile warte<br />
                        są jej włosy. Dzięki nam nie tylko zmienisz swój wygląd<br />
                        ale też uzyskasz środki na swoje wymarzone wakacje,<br />
                        Kurs w którym zawsze chciałaś uczestniczyć ale<br />
                        brakowało środków z nami może być to:<br />
                    </p>
                    <div className='Hair-trade-two-columns-small metamorfoza-plus'>
                        <div className='col-one'>
                            <h2>Metamorfoza + </h2>
                        </div>
                        <div className='col-two'>
                            <div className={`animation-container ${isInvisible ? 'invisible' : ''}`}>
                                <ul ref={metamorfozaListRef} style={{ transform: `translateY(${scrollPosition}px)`, opacity: `${isInvisible}` }}>
                                    <li></li>
                                    <li className='green'>Wakacje</li>
                                    <li className='blue'>Rozwój</li>
                                    <li className='purpple'>Oszczędności</li>
                                    <li className='orange'>Spełnione marzenie</li>
                                    <li className='pink'>Zabawa</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <button className='Hair-trade-btn-one'>
                        Jak działamy
                    </button>
                </div>
                <div className='col-two image-container'>
                    {/* Tu możesz dodać obrazek */}
                </div>
            </div>
        </div>
    );
}

export default Metamorfoza;
