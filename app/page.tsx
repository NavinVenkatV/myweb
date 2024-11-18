import Hero from "./Components/Hero";
import { FloatingNav } from "./Components/Ui/FloatingNavbar";
import { FaHome } from "react-icons/fa";
import Grid from "./Components/Grid";
import Experience from "./Components/Experience";
import { navItems } from "./data";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";

export default function Home() {
  return (
   <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
    <div className="max-w-7xl w-full">
      <FloatingNav navItems={navItems}/>
      <Hero/>
      <div className="md:hidden"><Grid/></div>
      <Projects/>
      <Experience/>
      <Footer/>
    </div>
   </main>
  );
}
