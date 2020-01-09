import React from 'react';
import "./Navbar.css"
import { Main } from '../Main/Main';

export const Navbar = (props) =>
    (<div>
        <div className="Navbar">
            <span>Hello there</span>
        </div>
        <Main>
            {props.children}
        </Main>
    </div>)
    ;
