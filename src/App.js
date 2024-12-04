import Header from "./components/header/header";
import OurServices from "./components/our services/ourServices";
import "./App.css";
import FirstPage from "./components/first_page";
import Consult from "./components/consultation/Consult"
import Industries from "./components/industries/industries";
import TechStack from "./components/TechStack/techstack";
import Maximize from "./components/maximize/maximize";
import Footer from "./components/Footer/footer";
import Introduction from './components/Intro/Introduction'
 
function App() {
  return (
    <div className="App">
      <Header />
      <FirstPage />
      <Introduction />
      <OurServices />
      <TechStack />
      <Maximize />
      
      <Industries />
      <Consult />
      <Footer />

    </div>
  );
}

export default App;
