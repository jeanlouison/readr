import React from 'react';
import styled from 'styled-components';

import logo_unistra from '../img/logo_unistra.svg';
import '../Home.css';

const Header = () => {

    const LogoLink = styled.a`
    text-decoration: none;
    color: black;

    &:focus, &:hover, &:link, &:active {
        text-decoration: none;
        color: black;
    }
    `;

    return <header className="d-flex justify-content-between mx-3">
        <LogoLink href="/" className="d-flex flex-column my-0">
            <h1 className="mb-0 mt-2">Readr</h1>
            <h3>pour ADE</h3>
        </LogoLink>
        <img src={logo_unistra} width="150vw" alt="Logo de l'Université de Strasbourg"/>
    </header>
}

export default Header;