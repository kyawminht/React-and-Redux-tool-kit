
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Products from './Products';
import Nav from './Nav';
import Favouriate from './Favouriate';
import AtToCart from './AtToCart';

function App() {
  return (
    <div className="App">
      <Nav/>
     <Routes>
      <Route path='/' element={<Products/>}/>
      <Route path='/favouriate' element={<Favouriate/>}/>
      <Route path='/cart' element={<AtToCart/>}/>
     </Routes>
    </div>
  );
}

export default App;
