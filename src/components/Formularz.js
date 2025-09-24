import React, { useState, useEffect } from 'react';
import './Formularz.scss';
import arrowLeft from '../images/arrowleft.svg';
import arrowRight from '../images/arrowright.svg';
import slide2photo from '../images/slide2photo.avif';
import slide3photo from '../images/slide3photo.avif';
import slide2photopo from '../images/slide2photopo.avif'

const Formularz = () => {
    const [sciecie, setSciecie] = useState(true)

    const poscieciu = () => {
        setSciecie(false)
    }

    const przedscieciem = () => {
        setSciecie(true)
    }

    const [step, setStep] = useState(1);
    const [form, setForm] = useState({
        firstName: '',
        phone: '',
        preferredTime: ''
    });
    const [file, setFile] = useState(null);

    const nextstep = () => {
        if (step < 5) {
            setStep(prevStep => prevStep + 1);
        }
    };

    const prevstep = () => {
        if (step > 1) {
            setStep(prevStep => prevStep - 1);
        }
    };

    useEffect(() => {
        const slider = document.getElementById('rangeSlider');
        const percent = ((step - slider.min) / (slider.max - slider.min)) * 100;
        slider.style.setProperty('--value', `${percent}%`);
    }, [step]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };
    const preventSubmit = (e) => {
        e.preventDefault();
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const fd = new FormData();
        fd.append('firstName', form.firstName);
        fd.append('phone', form.phone);
        fd.append('preferredTime', form.preferredTime);
        fd.append('file', file);

        fetch('http://hairtrade.scharmach.pl/contact2.php', {
            mode: 'no-cors',
            method: 'POST',
            body: fd,
            data: fd
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Wystąpił błąd podczas wysyłania formularza');
                }
                return response.json();
            })
            .then((data) => {
                console.log('Odpowiedź serwera:', data.error);
                // Wykonaj odpowiednie działania po wysłaniu formularza
                alert('Formularz został wysłany');
            })
            .catch((error) => {
                console.error('Wystąpił błąd podczas wysyłania formularza:', error);
            });
    };

    const handleSendFormClick = (e) => {
        handleSubmit(e);
        nextstep();
    };

    return (
        <div className='Hair-trade-formularz'>
            <div className='choose-form'>
                <button className={`white-btn ${sciecie ? 'active-btn' : ''}`} onClick={przedscieciem}>Jestem przed ścięciem</button>
                <button className={`white-btn ${!sciecie ? 'active-btn' : ''}`} onClick={poscieciu}>Jestem po ścięciu</button>
            </div>
            <div className='przed-scieciem'>
                <form onSubmit={preventSubmit}>
                    <div className='top'>
                        <div className='left'>
                            <h3>{sciecie ? 'Jestem przed ścięciem' : 'Jestem po ścięciu'}</h3>
                        </div>
                        <div className='middle-top'>
                            <div className='krok'><span>Krok {step}</span></div>
                        </div>
                        <div className='right'>
                        </div>
                    </div>
                    <div className='middle'>
                        <div className={`slide slide-one ${step === 1 ? 'slide-active' : ''}`}>
                            <div className='left-slide'>
                                <p>Zostaw nam swoje dane kontaktowe nasz konsultant skontaktuje się z tobą jeszcze tego samego dnia</p>
                            </div>
                            <div className='right-slide'>
                                <div>
                                    <label>Podaj Imię</label><br />
                                    <input
                                        type="text"
                                        name="firstName"
                                        aria-label='Imię'
                                        value={form.firstName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label>Podaj numer telefonu</label><br />
                                    <input
                                        type="tel"
                                        name="phone"
                                        aria-label='Numer telefonu'
                                        value={form.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label>Preferowana godzina kontaktu</label><br />
                                    <input
                                        type="time"
                                        name="preferredTime"
                                        aria-label='Preferowana godzina kontaktu'
                                        value={form.preferredTime}
                                        onChange={handleChange}
                                        className='time-input'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={`slide slide-two ${step === 2 ? 'slide-active' : ''}`}>
                            <div className='left-slide'>
                                <p>{sciecie ? 'Wyślij nam zdjęcie twoich włosów nasz ekspert dokona wstępnej wyceny i oceny towjich włosów' : 'Prześlij nam zdjęcie swojego już obciętego kucyka (warkocza), zrobione przy dobrym oświetleniu, z miarką, taśmą mierniczą lub linijką na blacie oraz na wadze.'}</p>
                                <input
                                    className='input-file'
                                    aria-label='Załaduj zdjęcie'
                                    type='file'
                                    onChange={handleFileChange}
                                />
                            </div>
                            <div className='right-slide'>
                                <img src={sciecie ? slide2photo : slide2photopo} alt='Włosy przygotowane do wysyłki' />
                                <p>
                                    {sciecie ? 'Zdjęcie (od strony pleców) suchych rozpuszczonych włosów oraz zdjęcie włosów spiętych w kucyk, z taśmą centymetrową, przyłożoną od zakładanej wysokości cięcia.' : ''}
                                </p>
                            </div>
                        </div>
                        <div className={`slide slide-three ${step === 3 ? 'slide-active' : ''}`}>
                            <div className='left-slide'>
                                <p>Nasz konsultant skontaktuje się z tobą i poinstruuje jak prawidłowo ściąć włosy, dodatkowo otrzymasz od nas 50 zł zwrotu za usługi fryzjerskie jeśli zdecydujesz się na ścięcie włosów w salonie</p>
                            </div>
                            <div className='right-slide'>
                                <img src={slide3photo} alt='obcięte włosy' />
                                <p>{sciecie ? 'Bardzo ważne jest prawidłowe obcięcie włosów, gdyż niewłaściwie ścięte włosy są po prostu odpadem technologicznym. Dlatego nasz menedżer obowiązkowo poprowadzi cały proces obcinania włosów w trybie online.' : 'Nasz ekspert dokona oceny i określi wartość Twoich włosów z uwzględnieniem ich koloru, długości, wagi i struktury.'}
                                </p>
                            </div>
                        </div>
                        <div className={`slide slide-four ${step === 4 ? 'slide-active' : ''}`}>
                            <div className='left-slide'>
                                <p>Sporządź umowę w dwóch jednobrzmiących kopiach (wzór do pobrania) wypisaną i podpisaną umowę i kopię kupna - sprzedaży umieść w paczce z włosami. Po ekspertyzie i wycenie uzupełnimy cenę skupu w umowie i podpisaną kopię odeślemy z powrotem do Ciebie</p>
                                <button className='pobierz-umowe'>Pobierz umowę</button>
                            </div>
                            <div className='right-slide'>
                                <p className='big-text'>
                                    Spakuj włosy i dwa egzemplarze wypełnionej umowy i prześlij je do nas
                                </p>
                                <p className='small-text'>
                                    Instrukcja Spakowania włosów do wysyłki
                                </p>
                                <button className='pobierz-instrukcje'>Instrukcja</button>
                            </div>
                        </div>
                        <div className={`slide slide-five ${step === 5 ? 'slide-active' : ''}`}>
                            <div className='left-slide'>
                                <p>Otrzymane włosy poddane są ekspertyzie cena uzgadniana jest z klientem po akceptacji ceny środki zostają przelane z podane konto Bankowe a kopia umowy odesłana pocztą</p>
                                <h4>Formularz został wysłany :) Dziękujemy</h4>
                            </div>
                            <div className='right-slide'>
                            </div>
                        </div>
                    </div>
                    <div className='bottom'>
                        <div className='buttons-container'>
                            {step !== 1 && (
                                <button className='prev-step' onClick={prevstep}>
                                    <img src={arrowLeft} alt='strzałka w lewo' />
                                    <span>Cofnij</span>
                                </button>
                            )}
                            {step < 4 && (
                                <button className='next-step' onClick={nextstep}>
                                    <span>Następny krok</span>
                                    <img src={arrowRight} alt='strzałka w prawo' />
                                </button>
                            )}
                            {step === 4 && (
                                <button className='send-form' type='submit' onClick={handleSendFormClick}>
                                    <span>Wyślij formularz</span>
                                </button>
                            )}
                        </div>
                        <div className='range-container' id='dlaczego-my'>
                            <div className='range'>
                                <span>postępy</span>
                                <input
                                    type="range"
                                    id="rangeSlider"
                                    name="rangeSlider"
                                    aria-label='Wskaźnik postępu'
                                    min="1"
                                    max="5"
                                    value={step}
                                    onChange={(e) => setStep(Number(e.target.value))}
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Formularz;
