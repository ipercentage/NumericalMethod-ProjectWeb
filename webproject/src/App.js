import { NavBar } from './NavBar';
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
import './App.css';

import Home from './Element/Home';
import Bisection from './RootsOfEquations/Bisection';
import FalsePosition from './RootsOfEquations/FalsePosition';
import OnePoint from './RootsOfEquations/OnePoint';
import NewtonRaphson from './RootsOfEquations/NewtonRaphson';
import Secant from './RootsOfEquations/Secant';
import Cramer from './LinearEquations/Cramer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />

          <Route path="/Bisection" element={<Bisection/>} />
          <Route path="/Falseposition" element={<FalsePosition/>} />
          <Route path="/OnePoint" element={<OnePoint/>} />
          <Route path="/NewtonRaphson" element={<NewtonRaphson/>} />
          <Route path="/Secant" element={<Secant/>} />

          <Route path="/Cramer" element={<Cramer/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

