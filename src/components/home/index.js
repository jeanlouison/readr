import React from 'react';
import { HashRouter, Route, Redirect, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';

import FormAgenda from './FormAgenda';
import AgendaCardViewer from './AgendaCardViewer';

import logo_unistra from '../../img/logo_unistra.svg'

import '../../Home.css'
import '../../info.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {

    const StyledLink = styled(Link)`
        padding: 10px;
        border-radius: 8px;
        color: white;
        background-color: #3c78d8;
        text-decoration: none;
        font-family: 'Nunito', 'sans-serif';
        font-weight: 700;

        &:focus, &:hover, &:link, &:active {
            text-decoration: none;
            background-color: #2a63c0;
            color: white;
        }
    `;

    const LogoLink = styled.a`
    text-decoration: none;
    color: black;

    &:focus, &:hover, &:link, &:active {
        text-decoration: none;
        color: black;
    }
    `;

    return <>
        <header className="d-flex justify-content-between mx-3">
            <LogoLink href="/" className="d-flex flex-column my-0">
                <h1 className="mb-0 mt-2">Readr</h1>
                <h3>pour ADE</h3>
            </LogoLink>
            <img src={logo_unistra} width="150vw" alt="Logo de l'Université de Strasbourg"/>
        </header>
    
        <HashRouter>
            <Switch>
                <Route path="/add-agenda">
                <div className="d-flex flex-column">
                <StyledLink className="blue-shadow mx-3 py-3 h4 text-center" to='/select-agenda'>S&eacute;lectionner une ressource</StyledLink>
                <span className="nunito-light h4 mt-2 mb-3 mx-auto">ou</span>
                <div>
                    <div className="d-flex flex-column content-card blue-shadow">
                        <h2>Ajouter un agenda</h2>
                        <FormAgenda />
                        <div className="fixed-bottom pb-3 px-3">
                            <i className="gg-info mb-2"></i>
                            <span className="nunito-light text-justify">
                                Pour ajouter votre agenda habituel, vous pouvez suivre 
                                    <a href="https://adewebcons.unistra.fr/jsp/custom/modules/plannings/generateCalUrl.jsp"> ce lien
                                    </a> et copier l’adresse obtenue dans le champ ci dessus,
                                    depuis la zone de texte ou en appuyant sur le bouton “coller”.
                            </span>
                        </div>
                    </div>
                </div>
                </div>
                </Route>
            
                <Route path="/select-agenda">
                    <div className="d-flex flex-column">
                        <StyledLink className="blue-shadow mx-3 py-3 h4 text-center" to='/add-agenda'>Ajouter un agenda</StyledLink>
                        <span className="nunito-light h4 mt-2 mb-3 mx-auto">ou</span>
                        <div>
                        <div className="content-card blue-shadow ">
                            <AgendaCardViewer className="mx-auto" />
                        </div>
                        </div>
                    </div>
                    
                </Route>
                <Route path="/">
                    <div className="d-flex flex-column">
                        <StyledLink className="blue-shadow mx-3 py-3 h4 text-center" to='/add-agenda'>Ajouter un agenda</StyledLink>
                        <span className="nunito-light h4 mt-2 mb-3 mx-auto">ou</span>
                        <StyledLink className="blue-shadow mx-3 py-3 h4 text-center" to='/select-agenda'>S&eacute;lectionner une ressource</StyledLink>
                    </div>
                    
                </Route>
                <Redirect to="/" />
            </Switch>
        </HashRouter>
        
    </>;
};

export default Home;