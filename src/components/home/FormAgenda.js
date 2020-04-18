import React, { useState } from 'react';

import { add_agenda } from '../../api/agenda';

import './FormAgenda.css';

const FormAgenda = () => {

    let [agenda, setAgenda] = useState({
        name: '',
        code: ''
    });
    let [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        addAgenda(agenda)
        .then(() => {
            setAgenda({
                name: '',
                code: ''
            });
        })
    };

    const handleChange = (event) => {
        let newAgenda = {...agenda};
        newAgenda[event.target.name] = event.target.value;
        setAgenda(newAgenda);
    };

    const addAgenda = (agenda) => {
        agenda.color = getRandomColor();
        return add_agenda(agenda)
        .then((a) => {
            localStorage.setItem(a.id, JSON.stringify(a));
        })
        .catch(err => setError(err.message));
    };

    const getRandomColor = () => `rgb(${Math.floor(Math.random() * (255 - 200) + 200)}, ${Math.floor(Math.random() * (255 - 200) + 200)}, ${Math.floor(Math.random() * (255 - 200) + 200)})`;

    return <form className="d-flex flex-column nunito-light" onSubmit={handleSubmit}>
        <span color='red'>{error}</span>
        <input type="text" value={agenda.name} name="name" placeholder="Nom de l'agenda" id="ui-add-name" onChange={handleChange}/>
        <div className="d-flex flex-row mt-3">
        <input className="flex-grow-1" type="text" value={agenda.code} name="code" placeholder="Ajouter un code" id="ui-add-code" onChange={handleChange}/>
        <button name="Ajouter un code" id="ui-btn-add-code">+</button>
        </div>
    </form>;
};

export default FormAgenda;