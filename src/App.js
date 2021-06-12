import React from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Intro from './component/Intro/Intro';
import LoveToDo from './component/LoveToDo/LoveToDo';
import Projects from './component/Projects/Projects';
import Skill from './component/Skill/Skill';

function App() {

  return (<div>
    
    <Router>
      <Header/>
      <Switch>
        
        <Route exact path="/">
          <Intro />
          <About />
          <Skill />
          <LoveToDo />
          <Projects />
          <Contact />
        </Route>

        <Route path="/intro">
          <Intro />
       </Route>

        <Route path="/about">
          <About/>
        </Route>

        <Route path="/skill">
          <Skill />
          <LoveToDo/>
        </Route>

        <Route path="/projects">
          <Projects/>
        </Route>

        <Route path="/contact">
          <Contact/>
        </Route>
      
        <Route path="*">
          <Intro />
        </Route>

      </Switch>
      <Footer/>
    </Router>

  </div>);
}

export default App;
