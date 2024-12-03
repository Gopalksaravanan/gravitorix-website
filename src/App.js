import Header from "./components/header/header";
import OurServices from "./components/our services/ourServices";
import "./App.css";
import FirstPage from "./components/first_page";
import Form from "./components/consultation/Form";
import Consult from "./components/consultation/Consult";
import TechStack from "./components/TechStack/techstack";

function App() {
  return (
    <div className="App">
      <Header />
      <FirstPage />

      <OurServices />
      <TechStack />
      <Consult />
    </div>
  );
}

export default App;
