import React, { useState } from 'react'
import './Kontakt.scss'
import KontaktImg from '../images/kontakt-img.avif'

const Kontakt = () => {
    const [form, setForm] = useState({
        name: '',
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
        // Handle form submission
        console.log(form);
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
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>Podaj numer telefonu</label>
                            <input
                                type="text"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>Preferowana godzina kontaktu</label>
                            <input
                                type="text"
                                name="preferredTime"
                                value={form.preferredTime}
                                onChange={handleChange}
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