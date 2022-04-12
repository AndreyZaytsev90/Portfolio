import React from 'react';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";

type AppPropsType = {

}

function App(props: AppPropsType) {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills /*id={props.id}*//>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
