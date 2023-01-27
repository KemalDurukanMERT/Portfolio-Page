import Home from "./Components/Home/Home";
import Navbarx from "./Components/Navbar";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <div>
      <Navbarx />
      <div className="d-flex">
        <Home />
        <Skills />
      </div>
    </div>
  );
}

export default App;
