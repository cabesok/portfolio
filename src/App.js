
import './App.css';
import './css/normalize.css';
import Header from './components/Header';
import MyName from './components/MyName'
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';


function App() {
  return (
    <div className="App">
      <Header />
      <MyName />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />

      <div className='sideicons' >
        <a href='https://github.com/cabesok' target='_blank' ><i class="fa-brands fa-github"></i></a>
        <a href='https://www.linkedin.com/in/ecostadev/' target='_blank' ><i class="fa-brands fa-linkedin"></i></a>
      </div>
      
    </div>
  );
}

export default App;
