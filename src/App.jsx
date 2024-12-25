import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import {
  Home,
  About,
  Contact,
  Services,
  Loans,
  Business,
} from "./components/pages";
function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/business" element={<Business />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
