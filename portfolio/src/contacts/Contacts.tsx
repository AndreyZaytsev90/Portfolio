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
                        <div>
                            <textarea className={style.textarea} cols={58} rows={2}></textarea>
                        </div>
                    </form>
                    <button className={style.button}>Send</button>
                </div>

            </div>
        </div>
    );
};

export default Contacts;