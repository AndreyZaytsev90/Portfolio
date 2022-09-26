import React from 'react';
import style from './Projects.module.css'
import styleContainer from './../common/styles/Container.module.css'
import Project from "./project/Project";

type ProjectsPropsType = {}

const Projects = (props: ProjectsPropsType) => {
  return (
    <div className={style.projectsBlock}>
      <div className={`${styleContainer.container} ${style.projectsContainer}`}>
        <div className={style.title}>
          <h2>My Projects</h2>
        </div>
        <div className={style.projects}>
          <Project title={"Social network"} description={"first project"}/>
          <Project title={"TodoList"} description={"second project"}/>
        </div>
      </div>
    </div>
  );
};

export default Projects;