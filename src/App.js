import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Navbar from "./components/nav-bar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Test from "./components/testimonials/Test";
import Works from "./components/works/Works";
import "./App.scss"
function App() {
  return (
    <div className="App">
      <>
      <Navbar/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Test/>
        <Contact/>
      </div>
      </>
    </div>
   
  );
}

export default App;
