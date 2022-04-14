import './App.css';
import './styles.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <Skills></Skills>
      <Projects></Projects>
      {/* <Contact></Contact> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
