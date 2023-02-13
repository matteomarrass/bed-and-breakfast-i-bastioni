import './app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import History from './pages/HistoryCity';
import AboutUs from './pages/AboutUs';
import Rates from './pages/Rates';
import Error404 from './pages/Error404';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='history' element={<History />} />
          <Route path='aboutus' element={<AboutUs />}/>
          <Route path='rates' element={<Rates />}/>
          <Route path='*' element={<Error404 />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
