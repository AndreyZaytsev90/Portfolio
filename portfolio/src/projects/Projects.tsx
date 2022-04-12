import React from 'react';
import style from './Projects.module.css'
import styleContainer from './../common/styles/Container.module.css'
import Project from "./project/Project";

type ProjectsPropsType = {

}

const Projects = (props: ProjectsPropsType) => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>My Projects</h2>
                <div className={style.projects}>
                    <Project title={"Social network"} description={""}/>
                    <Project title={"TodoList"} description={""}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;