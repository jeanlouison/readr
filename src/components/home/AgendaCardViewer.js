import React, { useState, useEffect } from 'react';

import { get_all_agendas } from '../../api/agenda';

const AgendaCardViewer = () => {

    let [onlineCards, setOnlineCards] = useState([]);
    let [offlineCards, setOfflineCards] = useState([]);
    let [loading, setLoading] = useState(true);
    let [error, setError] = useState('');

    useEffect(() => {
        for (const key in localStorage) {
			if (localStorage.hasOwnProperty(key)) {
                let agenda = JSON.parse(localStorage.getItem(key));
                setOfflineCards((cards) => [
                    ...cards, 
                    <span key={agenda.id} className="card" background-color={agenda.color}>
                        <h2>{agenda.name}</h2>
                        <h6>{agenda.code}</h6>
                    </span>
                ]);
            }
		}
    }, []);

    useEffect(() => {
        setLoading(true);
        get_all_agendas()
        .then((agendas) => {
            setOnlineCards(
                agendas.map(agenda =>
                <span key={agenda.id} className="card" background-color={agenda.color}>
                    <h2>{agenda.name}</h2>
                    <h6>{agenda.code}</h6>
                </span>
            ));
            setLoading(false);
        })
        .catch(err => {
            setError(err.message);
            setLoading(false);
        });
    }, []);

    return <>
        <h2>Séléction de ressources</h2>
        <h3>Ressources locales</h3>
        <div className="scrolling-wrapper">
            {offlineCards}
        </div>

        <h3>Ressources en ligne</h3>
        <div className="scrolling-wrapper">
        { loading ?
            'Loading...' :
            error ?
            'Error: ' + error :
            onlineCards }
        </div>
    </>;

};

export default AgendaCardViewer;