import React from 'react';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";

type AppPropsType = {

}

function App(props: AppPropsType) {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills /*id={props.id}*//>
            <Projects/>
        </div>
    );
}

export default App;
