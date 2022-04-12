import React from 'react';
import style from './Contacts.module.css'
import styleContainer from "../common/styles/Container.module.css";


const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <div className={style.contacts}>
                    <form className={style.form} action="Contacts">
                        <input type="text"/>
                        <input type="text"/>
                        <textarea className={style.textarea} name="Your text" id='1'></textarea>
                    </form>
                    <button className={style.button}>Send</button>
                </div>

            </div>
        </div>
    );
};

export default Contacts;