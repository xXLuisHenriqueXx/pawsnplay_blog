import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Shop from "./components/Shop";
import Blog from "./components/Blog";
import Team from "./components/Team";

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
    </main>
  );
}

export default App;
