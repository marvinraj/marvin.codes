import About from "./components/About";
import Contact from "./components/Contact";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <>
      <Sidebar/>

      {/* main pages */}
      <main>
        <Landing/>
        <Projects/>
        <About/>
        <Contact/>
      </main>
    </>
  );
}
