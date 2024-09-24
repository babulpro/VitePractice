 
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
 
import './App.css'
 
import Home from './pages/Home'
import Help from "./pages/Help";
import About from "./pages/about";
import Task from "./task/Task";
 
 

function App() {
 (0)

  return (
    <div>
      <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>}/>
            <Route path="/help" element={<Help/>}/>
            <Route path="/task" element={<Task/>}/>
          </Routes>
      </Router>
    </div>
  )
}

export default App
