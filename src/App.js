import logo from "./logo.svg";
import { Link, Routes, Route, HashRouter } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <div>
          <nav>
            <ul id="navigation">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about/" element={<About />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
