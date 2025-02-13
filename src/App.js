import {
  HashRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import "./styles.css";
import SvDFSS from "./Pages/FullScreenScroll/SvDFSS";
import SvDTakeover from "./Pages/Takeover/SvDTakeover";
import AftonbladetWelcomePageOne from "./Pages/AftonbladetWelcomePage/AftonbladetWelcomePage";
import AftonbladetWallpaper from "./Pages/Wallpaper/AftonbladetWallpaper";
import DoubleMidscroll from "./Pages/DoubleMidscroll/DoubleMidscroll";
import DoubleMidscrollFrame from "./Pages/DoubleMidscroll/DoubleMidscrollFrame";

function SvDFSSPage(purchase) {
  const { id } = useParams();
  return <SvDFSS id={id} purchase={purchase.purchase}/>;
}

function SvDTakeoverPage() {
  const { id } = useParams();
  return <SvDTakeover id={id} />;
}

function AftonbladetWelcomePage(site) {
  const { id } = useParams();
  return <AftonbladetWelcomePageOne id={id} site={site.site} />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/svd_fullscreenscroll/:id" element={<SvDFSSPage purchase={"programmatic"} />} />
        <Route path="/svd_fullscreenscroll-io/:id" element={<SvDFSSPage purchase={"io"} />} />
        <Route path="/svd_takeover/:id" element={<SvDTakeoverPage />} />
        <Route path="/aft_welcome-page-aft/:id" element={<AftonbladetWelcomePage site={"Aftonbladet"} />} />
        <Route path="/svd_welcome-page-svd/:id" element={<AftonbladetWelcomePage site={"SvD"} />} />
        <Route path="/aft_wallpaper/:id" element={<AftonbladetWallpaper />} />
        <Route path="/sts_double-midscroll/:id" element={<DoubleMidscroll />} />
        <Route path="/sts_double-midscroll-frame/:id" element={<DoubleMidscrollFrame />} />
      </Routes>
    </Router>
  );
}

export default App;
