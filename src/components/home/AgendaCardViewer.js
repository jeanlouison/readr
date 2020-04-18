import React, { useState, useEffect } from 'react';

import { get_all_agendas } from '../../api/agenda';

import '../../Home.css'

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
                    <span key={agenda.id} className="agendacard" style={
                        {
                            backgroundColor: agenda.color,
                            'box-shadow': '1px 5px 11px -5px ' + agenda.color
                        }}>
                        <h3>{agenda.name}</h3>
                        <h6>{
                            agenda.code.length < 9 ?
                            agenda.code :
                            agenda.code.slice(0, 9)+'...'
                        }</h6>
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
                    <span key={agenda.id} className="agendacard" style={
                        {
                            backgroundColor: agenda.color,
                            'box-shadow': '1px 5px 11px -5px ' + agenda.color
                        }}>
                    <h3>{agenda.name}</h3>
                    <h6>{
                        agenda.code.length < 9 ?
                        agenda.code :
                        agenda.code.slice(0, 9)+'...'
                    }</h6>
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
        <h2>Ressources locales</h2>
        <div className="scrolling-wrapper">
            {offlineCards}
        </div>

        <h2>Ressources en ligne</h2>
        <div className="scrolling-wrapper">
        { loading ?
            'Chargement...' :
            error ?
            'Error: ' + error :
            onlineCards }
        </div>
    </>;

};

export default AgendaCardViewer;