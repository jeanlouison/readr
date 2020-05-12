import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

import { get_all_agendas } from '../../api/agenda';

import '../../style/Home.css'

const AgendaCardViewer = () => {

    let [onlineCards, setOnlineCards] = useState([]);
    let [offlineCards, setOfflineCards] = useState([]);
    let [loading, setLoading] = useState(true);
    let [error, setError] = useState('');

    const Card = styled(Link)`
        color: black;
        text-decoration: none;

        &:focus, &:hover, &:link, &:active {
            text-decoration: none;
            color: black;
        }
    `;

    

    useEffect(() => {
        try {
            for (const key in localStorage) {
                if (localStorage.hasOwnProperty(key)) {
                    let agenda = JSON.parse(localStorage.getItem(key));
                    setOfflineCards((cards) => [
                        ...cards, 
                        <Card to={`/calendar/${agenda.code}`} key={agenda.id} className="agendacard" style={
                            {
                                backgroundColor: agenda.color,
                                boxShadow: '1px 5px 11px -5px ' + agenda.color
                            }}>
                            <h3 className="text-truncate">{agenda.name}</h3>
                            <h6 className="text-truncate">{agenda.code}</h6>
                        </Card>
                    ]);
                }
            }
        }
        catch {
            setError('Cookies are disabled, consider enabling them.')
        }
    }, []);

    useEffect(() => {
        setLoading(true);
        get_all_agendas()
        .then((agendas) => {
		console.log(agendas);
            setOnlineCards(
                agendas.map(agenda =>
                    <Card to={`/calendar/${agenda.code}`} key={agenda.id} className="agendacard" style={
                        {
                            backgroundColor: agenda.color,
                            boxShadow: '1px 5px 11px -5px ' + agenda.color
                        }}>
                    <h3 className="text-truncate">{agenda.name}</h3>
                    <h6 className="text-truncate">{agenda.code}</h6>
                </Card>
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
            {
                offlineCards.length ?
                offlineCards :
                <span className="nunito-light">Vous n'avez pas encore d'agenda.</span>
            }
        </div>

        <h2>Ressources en ligne</h2>
        <div className="scrolling-wrapper">
        { loading ?
            <span className="nunito-light">Chargement...</span> :
            error ?
            <span className="nunito-light">Erreur: {+ error}</span> :
            onlineCards }
        </div>
    </>;

};

export default AgendaCardViewer;
