import React from 'react';
import style from './Skills.module.css'
import styleContainer from './../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import {v1} from "uuid";

type SkillsPropsType = {

}

const Skills = (props: SkillsPropsType) => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>My skills</h2>
                <div className={style.skills}>
                    <Skill  title={"HTML/CSS"} description={"Semantic"}/>
                    <Skill  title={"JavaScript"} description={""}/>
                    <Skill  title={"React"} description={""}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;