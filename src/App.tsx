import { lazy, Suspense } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const Shop = lazy(() => import("./components/Shop"));
const Services = lazy(() => import("./components/Services"));
const About = lazy(() => import("./components/About"));
const Blog = lazy(() => import("./components/Blog"));
const Team = lazy(() => import("./components/Team"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Suspense
          fallback={<div className="min-h-150 w-full" aria-hidden="true" />}
        >
          <Shop />
        </Suspense>
        <Suspense
          fallback={<div className="min-h-125 w-full" aria-hidden="true" />}
        >
          <Services />
        </Suspense>
        <Suspense
          fallback={<div className="min-h-100 w-full" aria-hidden="true" />}
        >
          <About />
        </Suspense>
        <Suspense
          fallback={<div className="min-h-100 w-full" aria-hidden="true" />}
        >
          <Blog />
        </Suspense>
        <Suspense
          fallback={<div className="min-h-100 w-full" aria-hidden="true" />}
        >
          <Team />
        </Suspense>
        <Suspense
          fallback={<div className="min-h-125 w-full" aria-hidden="true" />}
        >
          <Contact />
        </Suspense>
      </main>
      <footer className="w-full py-8 text-center text-xs text-background/60 bg-foreground">
        <p>
          &copy; {new Date().getFullYear()} Paws n' Play. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default App;
