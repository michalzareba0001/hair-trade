import React, { useState } from 'react'
import './IleWarte.scss'
import postac1 from '../images/postac1.avif'

const IleWarte = () => {
    const [hairType, setHairType] = useState('Falisty');
    const [hairColor, setHairColor] = useState('');
    const [hairLength, setHairLength] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState(null);



    const handleHairTypeChange = (type) => {
        setHairType(type);
    };

    const handleHairColorChange = (color) => {
        setHairColor(color);
    };

    const handlePhotoUpload = (event) => {
        setPhoto(event.target.files[0]);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            hairType,
            hairColor,
            hairLength,
            photo,
            phoneNumber,
            name,
        });
    };
    return (
        <div className='Hair-trade-ile-warte'>
            <div className='ile-warte-content'>
                <div className='left'>
                    <h2>Ile warte są twoje włosy?</h2>
                    <p>Prześlij nam podstawowe dane, a my wstępnie<br />
                        oszacujemy ile pieniędzy możesz otrzymać za swoje<br /> włosy</p>
                    <img src={postac1} alt='ruda dziewczyna z długimi włosami' />
                </div>
                <div className='right'>
                    <div className='formularz'>
                        <form className='hair-value-form' onSubmit={handleSubmit}>
                            <h2>Oblicz wartość twoich włosów</h2>
                            <div className='hair-type'>
                                <label>Typ włosów</label>
                                <div className='hair-type-options'>
                                    <button
                                        type='button'
                                        className={hairType === 'Falisty' ? 'active' : ''}
                                        onClick={() => handleHairTypeChange('Falisty')}
                                    >
                                        Falisty
                                    </button>
                                    <button
                                        type='button'
                                        className={hairType === 'Prosty' ? 'active' : ''}
                                        onClick={() => handleHairTypeChange('Prosty')}
                                    >
                                        Prosty
                                    </button>
                                </div>
                            </div>
                            <div className='hair-color'>
                                <label>Kolor naturalny</label>
                                <div className='hair-color-options'>
                                    <div className='btn-container'>
                                        <button
                                            type='button'
                                            className={hairColor === 'Blond' ? 'selected blond' : 'blond'}
                                            onClick={() => handleHairColorChange('Blond')}
                                        >
                                        </button>
                                        <span>Blond</span>
                                    </div>
                                    <div className='btn-container'>                                    <button
                                        type='button'
                                        className={hairColor === 'Rude' ? 'selected rude' : 'rude'}
                                        onClick={() => handleHairColorChange('Rude')}
                                    >
                                    </button>
                                        <span>Rude</span>
                                    </div>
                                    <div className='btn-container'>
                                        <button
                                            type='button'
                                            className={hairColor === 'Ciemnie' ? 'selected ciemne' : 'ciemne'}
                                            onClick={() => handleHairColorChange('Ciemnie')}
                                        >
                                        </button>
                                        <span>Ciemnie</span>
                                    </div>
                                    <div className='btn-container'>
                                        <button
                                            type='button'
                                            className={hairColor === 'Ciemny blond' ? 'selected ciemny-blond' : 'ciemny-blond'}
                                            onClick={() => handleHairColorChange('Ciemny blond')}
                                        >
                                        </button>
                                        <span>Ciemny blond</span>
                                    </div>
                                </div>
                            </div>
                            <div className='lower-part'>
                                <div className='input-group'>
                                    <label>Długość włosów</label>
                                    <span className='small-text'>(w cm)</span>
                                    <input
                                        className='input-dlugosc'
                                        type='number'
                                        value={hairLength}
                                        onChange={(e) => setHairLength(e.target.value)}
                                    />
                                </div>
                                <div className='input-group'>
                                    <label>Zdjęcie</label>
                                    <span className='small-text info-link'>jak zrobić zdjęcie <span className='znak-zapytania'>?</span></span>
                                    <input
                                        className='input-file'
                                        type='file'
                                        onChange={handlePhotoUpload}
                                    />
                                </div>
                                <div className='input-group'>
                                    <label>Nr telefonu</label>
                                    <input
                                        type='tel'
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                    />
                                </div>
                                <div className='input-group'>
                                    <label>Imię</label>
                                    <input
                                        type='text'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <button type='submit' className='submit-button'>Wyślij</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default IleWarte