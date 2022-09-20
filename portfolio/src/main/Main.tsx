import React from 'react';
import style from './Main.module.css'
import styleContainer from './../common/styles/Container.module.css'
import Photo from '../img/photo_2.jpg'

const Main = () => {
  return (
    <div className={style.mainBlock}>
      <div className={styleContainer.container}>
        <div className={style.greeting}>
          <span>Hi There</span>
          <h1>I am Andrey Zaytsev</h1>
          <p>Frontend Developer</p>
        </div>
        <div>
          <img className={style.photo} src={Photo} alt="Photo"/>
        </div>
      </div>
    </div>
  );
};

export default Main;