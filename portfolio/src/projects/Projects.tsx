import React from 'react';
import style from './Projects.module.css'
import styleContainer from './../common/styles/Container.module.css'
import Project from "./project/Project";
import Title from "../common/components/title/Title";

type ProjectsPropsType = {}

const Projects = (props: ProjectsPropsType) => {
  return (
    <div className={style.projectsBlock}>
      <div className={`${styleContainer.container} ${style.projectsContainer}`}>
        <Title textTitle="My Projects"/>
        <div className={style.projects}>
          <Project title={"Social network"} description={"first project"}/>
          <Project title={"TodoList"} description={"second project"}/>
        </div>
      </div>
    </div>
  );
};

export default Projects;