import About from './sections/About';
import Home from './sections/Home';
import Navbar from './layouts/Navbar';
import Skills from './sections/Skills';
import Work from './sections/Work';
import Contact from './sections/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
