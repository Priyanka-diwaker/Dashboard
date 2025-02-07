
import './App.css';
import Home from './Pages/Home';           // Correct path for Home
import About from './Pages/About';         // Correct path for About
import Setting from './Pages/Setting';    // Correct path for Settings
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" exact element={<Home />}></Route>
    <Route path="/about" exact element={<About />}></Route>
    <Route path="/settings" exact element={<Setting />}></Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;


