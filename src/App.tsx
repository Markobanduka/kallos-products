import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import HomePage from "./Components/HomePage";
import BarbellPad from "./Components/Category/BarbellPad";
import AnkleStraps from "./Components/Category/AnkleStraps";
import Chalk from "./Components/Category/Chalk";
import LiquidChalk from "./Components/Category/LiquidChalk";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/barbell-pad" element={<BarbellPad />} />
            <Route path="/ankle-straps" element={<AnkleStraps />} />
            <Route path="/chalk" element={<Chalk />} />
            <Route path="/liquid-chalk" element={<LiquidChalk />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
