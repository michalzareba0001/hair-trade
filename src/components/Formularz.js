import React, { useState, useEffect } from 'react';
import './Formularz.scss';
import arrowLeft from '../images/arrowleft.svg';
import arrowRight from '../images/arrowright.svg';
import slide2photo from '../images/slide2photo.avif';
import slide3photo from '../images/slide3photo.avif';

const Formularz = () => {
    const [step, setStep] = useState(1);
    const [form, setForm] = useState({
        name: '',
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
        console.log('FORMULARZ WYSŁANY')

        e.preventDefault();
        console.log(form);
        if (file) {
            console.log('Uploaded file:', file);
        }
    };
    
    const handleSendFormClick = (e) => {
        handleSubmit(e);
        nextstep();
    };

    return (
        <div className='Hair-trade-formularz'>
            <div className='choose-form'>
                <button className='white-btn'>Jestem przed ścięciem</button>
                <button className='white-btn'>Jestem po ścięciu</button>
            </div>
            <div className='przed-scieciem'>
                <form onSubmit={preventSubmit}>
                    <div className='top'>
                        <div className='left'>
                            <h3>Jestem przed ścięciem</h3>
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
                                    <label>Podaj Imię</label><br/>
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label>Podaj numer telefonu</label><br/>
                                    <input
                                        type="text"
                                        name="phone"
                                        value={form.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label>Preferowana godzina kontaktu</label><br/>
                                    <input
                                        type="text"
                                        name="preferredTime"
                                        value={form.preferredTime}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={`slide slide-two ${step === 2 ? 'slide-active' : ''}`}>
                            <div className='left-slide'>
                                <p>Wyślij nam zdjęcie twoich włosów nasz ekspert dokona wstępnej wyceny i oceny towjich włosów</p>
                                <input
                                    className='input-file'
                                    type='file'
                                    onChange={handleFileChange}
                                />
                            </div>
                            <div className='right-slide'>
                                <img src={slide2photo} alt='Długie włosy od tyłu, rozpuszczone i spięte' />
                                <p>
                                Zdjęcie (od strony pleców) suchych rozpuszczonych włosów oraz zdjęcie włosów spiętych w kucyk, z taśmą centymetrową, przyłożoną od zakładanej wysokości cięcia.
                                </p>
                            </div>
                        </div>
                        <div className={`slide slide-three ${step === 3 ? 'slide-active' : ''}`}>
                            <div className='left-slide'>
                                <p>Nasz konsultant skontaktuje się z tobą i poinstruuje jak prawidłowo ściąć włosy, dodatkowo otrzymasz od nas 50 zł zwrotu za usługi fryzjerskie jeśli zdecydujesz się na ścięcie włosów w salonie</p>
                            </div>
                            <div className='right-slide'>
                                <img src={slide3photo} alt='obcięte włosy' />
                                <p>
                                Bardzo ważne jest prawidłowe obcięcie włosów, gdyż niewłaściwie ścięte włosy są po prostu odpadem technologicznym. Dlatego nasz menedżer obowiązkowo poprowadzi cały proces obcinania włosów w trybie online.
                                </p>
                            </div>
                        </div>
                        <div className={`slide slide-four ${step === 4 ? 'slide-active' : ''}`}>
                            <div className='left-slide'>
                                <p>Sporządź umowę w dwóch jednobrzmiących kopiach (wzór do pobrania) wypisaną i podpisaną umowę i kopię kupna - sprzedaży umieść w paczce z włosami. Po ekspertyzie i wycenie uzupełnimy skupu w umowie i podpisaną kopię odeślemy z powrotem do Ciebie</p>
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
                                <h4>Transakcja dobiega końca :) Dziękujemy</h4>
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
