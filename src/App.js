import { BrowserRouter, Routes, Route } from "react-router-dom";
import Translatedpage from "./Components/Translatedpage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="Translatedpage" element={<Translatedpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
