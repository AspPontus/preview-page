import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SvDFSS from './Pages/SvDFSS';
import './styles.css'
import ConfigPage from './Pages/ConfigPage';
import SvDTakeover from './Pages/SvDTakeover';
import AftonbladetWelcomePage from './Pages/AftonbladetWelcomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>   
          <Route path="/" element={<ConfigPage />} />
          <Route path="/svd_fullscreenscroll/:id" element={<SvDFSS/>} />
          <Route path="/svd_takeover/:id" element={<SvDTakeover />} />
          <Route path="/aft_welcome-page/:id" element={<AftonbladetWelcomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
