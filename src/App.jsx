import "./App.css";
import ButtonMenu from "./Components/Buttons/ButtonMenu";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from './Components/Main/Main';
import Acsessuares from "./Components/Sections/Acsessuares/Acsessuares";
import Furshet from "./Components/Sections/Furshet/Furshet";
import Gallery from "./Components/Sections/Gallery/Gallery";
import Paralax from "./Components/Sections/Parallax/Parallax";
import SectionDress from "./Components/Sections/SectionDress/SectionDress";
import Show from "./Components/Sections/Show/Show";

function App() {
  return (
    <>
    <div className="app">
      <ButtonMenu />
       <Header />
       <Main />
       <SectionDress />
       <Acsessuares />
       <Show />
       <Furshet />
       <Gallery />
       <Paralax />
       <Footer />
    </div>
    
    </>
  );
}

export default App;
