import React from 'react';
import style from './Title.module.css'

type TitlePropsType = {
  textTitle: string
}

const Title = (props: TitlePropsType) => {
  return (
    <div className={style.title}>
      <h2>{props.textTitle}</h2>
    </div>

  );
};

export default Title;