import React from 'react';
import { HashRouter, Route, Redirect, Switch, Link } from 'react-router-dom';

import FormAgenda from './FormAgenda';
import AgendaCardViewer from './AgendaCardViewer';

import logo_unistra from '../../img/logo_unistra.svg'

import '../../Home.css';

const Home = () => {

    return <>
        <header className="d-flex flex-row">
            <span className="logo">
                <h1>Readr</h1>
                <h2>pour ADE</h2>
            </span>
            <img src={logo_unistra} width="150vw" alt="Logo de l'Université de Strasbourg"/>
        </header>
    
        <HashRouter>
            

            <Switch>
                <Route path="/add-agenda">
                    <Link to='/select-agenda'>S&eacute;lectionner une ressource</Link>
                    <h2>Ajouter un agenda</h2>
                    <FormAgenda />  
                    <div className="d-flex flex-row bottom-0">
                        <i className="gg-info mr-2 my-auto"></i>
                        <span className="help">
                            Pour ajouter votre agenda habituel, vous pouvez suivre 
                                <a href="https://adewebcons.unistra.fr/jsp/custom/modules/plannings/generateCalUrl.jsp">
                                    ce lien
                                </a>
                                et copier l’adresse obtenue dans le champ ci dessus,
                                depuis la zone de texte ou en appuyant sur le bouton “coller”.
                        </span>
                    </div>
                </Route>
            
                <Route path="/select-agenda">
                    <Link to='/add-agenda'>Ajouter un agenda</Link>
                    <h2>Séléction de ressources</h2>
                    <AgendaCardViewer />
                </Route>
                <Route>
                    <Link to='/add-agenda'>Ajouter un agenda</Link>
                    <br/>
                    <Link to='/select-agenda'>S&eacute;lectionner une ressource</Link>
                </Route>
                <Redirect to="/" />
            </Switch>
        </HashRouter>
        
    </>;
};

export default Home;