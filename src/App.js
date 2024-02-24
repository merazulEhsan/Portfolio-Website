import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import NavMenu from "./components/NavMenu/NavMenu";
import { ToastContainer } from "react-toastify";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Project from "./components/Project/Project";

function App() {
  return (
    <>
      <NavMenu></NavMenu>
      <Home></Home>
      <About></About>
      <Project></Project>
      <Skills></Skills>
      <Education></Education>
      <Contact></Contact>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
