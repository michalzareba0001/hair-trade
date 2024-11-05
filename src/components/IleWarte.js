import React, { useState } from 'react'
import './IleWarte.scss'
import postac1 from '../images/postac1.avif'
import postac1small from '../images/postac1-small.avif'
import popupPhoto from '../images/slide2photo.avif'

const IleWarte = () => {
    const [hairType, setHairType] = useState('Falisty');
    const [hairColor, setHairColor] = useState('');
    const [hairLength, setHairLength] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState(null);
    const [popup, setPopup] = useState(false);



    const handleHairTypeChange = (type) => {
        setHairType(type);
    };

    const handleHairColorChange = (color) => {
        setHairColor(color);
    };

    const handlePhotoUpload = (event) => {
        setPhoto(event.target.files[0]);
    };

    const handlePopup = () => {
        console.log('TU POPUP')
        if (popup) {
            setPopup(false)
        }
        else {
            setPopup(true)
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
    
        const fd = new FormData();
        fd.append('hairType', hairType);
        fd.append('hairColor', hairColor);
        fd.append('hairLength', hairLength);  // Poprawiono pisownię
        fd.append('phoneNumber', phoneNumber);
        fd.append('photo', photo);
        fd.append('name', name);
    
        fetch('http://hairtrade.scharmach.pl/contact1.php', {
            method: 'POST',
            body: fd
        })
            .then((response) => {
                if (!response.ok) {
                    return response.text().then((text) => {
                        throw new Error(text);
                    });
                }
                return response.json();
            })
            .then((data) => {
                console.log('Odpowiedź serwera:', data);
                alert('Formularz został wysłany');
            })
            .catch((error) => {
                console.error('Wystąpił błąd podczas wysyłania formularza:', error);
            });
    };
    
    return (
        <div className='Hair-trade-ile-warte'>
            <div className={`ile-warte-popup ${popup ? 'popup-active' : ''}`}>
                <div className='popup-content'>
                    <div className='close-btn' onClick={handlePopup}>
                        X
                    </div>
                    <img src={popupPhoto} alt='Zdjęcie włosów rozpuszczonych i spiętych' />
                    <p>Zdjęcie (od strony pleców) suchych rozpuszczonych włosów oraz zdjęcie włosów spiętych w kucyk, z taśmą centymetrową, przyłożoną od zakładanej wysokości cięcia. Nasz ekspert dokona wizualnej oceny ich stanu i odpowiednio wyceni.</p>
                </div>
            </div>
            <div className='ile-warte-content'>
                <div className='left'>
                    <h2>Ile warte są twoje włosy?</h2>
                    <p>Prześlij nam podstawowe dane, a my wstępnie <br />
                        oszacujemy ile pieniędzy możesz otrzymać za swoje <br /> włosy</p>
                    <picture>
                        <source srcSet={postac1small} media="(max-width: 767px)" />
                        <source srcSet={postac1} media="(min-width: 768px)" />
                        <img src={postac1} alt='ruda dziewczyna z długimi włosami' />
                    </picture>
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
                                            aria-label='blond'
                                            className={hairColor === 'Blond' ? 'selected blond' : 'blond'}
                                            onClick={() => handleHairColorChange('Blond')}
                                        >
                                        </button>
                                        <span>Blond</span>
                                    </div>
                                    <div className='btn-container'>
                                        <button
                                            type='button'
                                            aria-label='rude'
                                            className={hairColor === 'Rude' ? 'selected rude' : 'rude'}
                                            onClick={() => handleHairColorChange('Rude')}
                                        >
                                        </button>
                                        <span>Rude</span>
                                    </div>
                                    <div className='btn-container'>
                                        <button
                                            type='button'
                                            aria-label='ciemne'
                                            className={hairColor === 'Ciemnie' ? 'selected ciemne' : 'ciemne'}
                                            onClick={() => handleHairColorChange('Ciemnie')}
                                        >
                                        </button>
                                        <span>Ciemnie</span>
                                    </div>
                                    <div className='btn-container'>
                                        <button
                                            type='button'
                                            aria-label='ciemny blond'
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
                                        aria-label='Długość włosów'
                                        type='number'
                                        value={hairLength}
                                        onChange={(e) => setHairLength(e.target.value)}
                                    />
                                </div>
                                <div className='input-group'>
                                    <label>Zdjęcie</label>
                                    <span className='small-text info-link' onClick={handlePopup}>jak zrobić zdjęcie <span className='znak-zapytania'>?</span></span>
                                    <input
                                        className='input-file'
                                        aria-label='Załaduj zdjęcie'
                                        type='file'
                                        onChange={handlePhotoUpload}
                                    />
                                </div>
                                <div className='input-group'>
                                    <label>Nr telefonu</label>
                                    <input
                                        type='tel'
                                        aria-label='Numer telefonu'
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                    />
                                </div>
                                <div className='input-group'>
                                    <label>Imię</label>
                                    <input
                                        type='text'
                                        aria-label='Imię'
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