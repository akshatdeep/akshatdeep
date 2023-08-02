import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Register from './pages/register';
import Auth from './pages/login';
import Home from './pages/Home';
import Protected from './pages/protected';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/sign-in' element={<Register/>}/>
        <Route path='/' element={<Protected Pages = {Home} />}>


          </Route>

      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
