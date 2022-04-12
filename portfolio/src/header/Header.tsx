import React from 'react';
import style from './Header.module.css'
import Nav from "../nav/Nav";

const Header = () => {
    return (
        <div className={style.container}>
            <div className={style.header}>
                <Nav/>
            </div>
        </div>

    );
};

export default Header;