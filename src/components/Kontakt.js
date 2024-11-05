import React, { useState } from 'react'
import './Kontakt.scss'
import KontaktImg from '../images/kontakt-img.avif'

const Kontakt = () => {
    const [form, setForm] = useState({
        firstName: '',
        phone: '',
        preferredTime: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const fd = new FormData();
        fd.append('firstName', form.firstName);
        fd.append('phone', form.phone);
        fd.append('preferredTime', form.preferredTime);

        fetch('http://hairtrade.scharmach.pl/contact3.php', {
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

    return (
        <div className='Hair-trade-kontakt'>
            <h2>Jesteś zdecydowana na zmiany i dodatkową gotówkę napisz!</h2>
            <div className='contact-form-container'>
                <img src={KontaktImg} alt='Uśmiechnięta dziewczyna z laptopem' className='kontakt-img' />
                <div className='contact-form'>
                    <h3>Zostaw swoje dane oddzwonimy do Ciebie</h3>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Podaj Imię</label>
                            <input
                                type="text"
                                name="firstName"
                                aria-label='Imię'
                                value={form.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Podaj numer telefonu</label>
                            <input
                                type="tel"
                                name="phone"
                                aria-label='Numer telefonu'
                                value={form.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Preferowana godzina kontaktu</label>
                            <input
                                type="time"
                                name="preferredTime"
                                aria-label='Preferowana godzina kontaktu'
                                value={form.preferredTime}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className='Hair-trade-btn-one'>Wyślij</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Kontakt