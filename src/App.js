import { Routes, Route } from "react-router-dom";
import "./App.css";
import Index from "./Pages/Dashboard";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </div>
  );
}

export default App;
