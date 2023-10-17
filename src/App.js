import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import './styles.css';
import SvDFSS from './Pages/SvDFSS';
import SvDTakeover from './Pages/SvDTakeover';
import AftonbladetWelcomePageOne from './Pages/AftonbladetWelcomePage';

function SvDFSSPage() {
  const { id } = useParams();
  return <SvDFSS id={id} />;
}

function SvDTakeoverPage() {
  const { id } = useParams();
  return <SvDTakeover id={id} />;
}

function AftonbladetWelcomePage() {
  const { id } = useParams();
  return <AftonbladetWelcomePageOne id={id} />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/svd_fullscreenscroll/:id" element={<SvDFSSPage />} />
        <Route path="/svd_takeover/:id" element={<SvDTakeoverPage />} />
        <Route path="/aft_welcome-page/:id" element={<AftonbladetWelcomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
