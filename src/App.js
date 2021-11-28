import "./App.css";
import Header from "./component/Header";
import Beranda from "./views/Beranda";
import Paket from "./views/Paket";

import Portofolio from "./views/Portofolio";
import About from "./views/About";
import Footer from "./component/Footer";

function App() {
  return (
    <Router>
      <Header />

      <Beranda />
      <Paket />
      <Portofolio />
      <About />
      <Footer />
    </Router>
  );
}

export default App;
