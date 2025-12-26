
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Trust from './components/Trust';
import Projects from './components/Projects';
import MidPageCTA from './components/MidPageCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <Hero />
            <Trust />
            <Services />
            <MidPageCTA />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
