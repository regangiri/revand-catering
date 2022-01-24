import "./App.css";
import Header from "./component/Header";
import Beranda from "./views/Beranda";
import Paket from "./views/Paket";

import Portofolio from "./views/Portofolio";
import About from "./views/About";
import Footer from "./component/Footer";
import ScrollToTop from "./component/ScrollToTop";

function App() {
  return (
    <div>
      <Header />

      <Beranda />
      <Paket />
      <Portofolio />
      <About />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
