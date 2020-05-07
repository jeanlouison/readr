import React from 'react';
import styled from 'styled-components';

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