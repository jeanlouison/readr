import React from 'react';

import logo_unistra from './img/logo_unistra.svg'

import './App.css';
import './Home.css';

function App() {
  return ( <>
    <header class="d-flex flex-row">
        <span class="logo">
            <h1>Readr</h1>
            <h2>pour ADE</h2>
        </span>
        <img src={logo_unistra} width="150vw" alt="Logo de l'Université de Strasbourg"/>
    </header>

    <div class="d-flex flex-row">
        <input type="text" name="Entrer un code" placeholder="Ajouter un code" id="ui-add-code"/>
        <input type="submit" name="Ajouter un code" value="+" id="ui-btn-add-code"/>
    </div>
    <input type="button" value="S&eacute;lectionner une ressource" id="ui-select-code"/>

    <div id="action-container" class="action-container">
         Séléction de ressources
        <h3>Ressources locales</h3>
        <div class="scrolling-wrapper">
            <div class="card"><h2>Card</h2></div>
            <div class="card"><h2>Card</h2></div>
            <div class="card"><h2>Card</h2></div>
            <div class="card"><h2>Card</h2></div>
            <div class="card"><h2>Card</h2></div>
            <div class="card"><h2>Card</h2></div>
        </div>

        <h3>Ressources en ligne</h3>
        <div class="scrolling-wrapper">
            <div class="card"><h2>Card</h2></div>
            <div class="card"><h2>Card</h2></div>
            <div class="card"><h2>Card</h2></div>
            <div class="card"><h2>Card</h2></div>
            <div class="card"><h2>Card</h2></div>
            <div class="card"><h2>Card</h2></div>
        </div>

        <h3>Ajouter un agenda</h3>
        <div class="d-flex flex-row">
            <i class="gg-info mr-2 my-auto"></i>
            <span class="help">
                Pour ajouter votre agenda habituel, vous pouvez suivre 
                    <a href="https://adewebcons.unistra.fr/jsp/custom/modules/plannings/generateCalUrl.jsp">
                        ce lien
                    </a>
                     et copier l’adresse obtenue dans le champ ci dessus,
                     depuis la zone de texte ou en appuyant sur le bouton “coller”.
            </span>
        </div>
    </div>
    </>);
}

export default App;
