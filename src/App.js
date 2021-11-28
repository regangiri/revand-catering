import "./App.css";
import Header from "./component/Header";
import Beranda from "./views/Beranda";
import Paket from "./views/Paket";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portofolio from "./views/Portofolio";
import About from "./views/About";

function App() {
  return (
    <Router>
      <Header />
      {/* <Routes>
        <Route path="/" component={Beranda} />
      </Routes> */}
      <Beranda />
      <Paket />
      <Portofolio />
      <About />
    </Router>
  );
}

export default App;
