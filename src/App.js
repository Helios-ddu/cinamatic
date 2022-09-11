
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Moviepage from './pages/Moviepage';
import Playspage from './pages/Playspage';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/movie/:id' element ={<Moviepage/>} />
      <Route path='/plays' element = {<Playspage/>} />
      
    </Routes>
    </>
  );
}

export default App;
