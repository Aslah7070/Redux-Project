
import './App.css';
import Cart from './components/Cart';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import { BrowserRouter,Routes,Route  } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Route>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
