import React from 'react';
import style from './Skills.module.css'
import styleContainer from './../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";

type SkillsPropsType = {

}

const Skills = (props: SkillsPropsType) => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title textTitle="My Skills"/>
                <div className={style.skills}>
                    <Skill  title={"HTML/CSS"} description={"Semantic HTML5 and CSS3"}/>
                    <Skill  title={"JavaScript/TypeScript"} description={"ES6"}/>
                    <Skill  title={"React/Redux"} description={""}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;