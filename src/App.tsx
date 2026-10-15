import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Shop from "./components/Shop";
import Blog from "./components/Blog";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Shop />
      <Services />
      <About />
      <Blog />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
