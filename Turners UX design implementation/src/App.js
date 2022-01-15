import "./App.css";
import Progress from "./components/progress/progress";
import Page1 from "./components/page1/page1";
import Page2 from "./components/page2/page2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="body">
        <Router>
          <Routes>
            <Route exact path="/" element={<Page1 />} />
            <Route exact path="/insurance" element={<Page2 />} />
            <Route exact path="/progress" element={<Progress />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
