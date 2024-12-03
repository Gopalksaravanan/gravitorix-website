
import Header from "./components/header/header";
import OurServices from "./components/our services/ourServices";
import './App.css';  
import FirstPage from "./components/first_page";
import Consult from "./components/consultation/Consult"
import Industries from "./components/industries/industries";

function App() {
  return (
    <div className="App">
      <Header/>
      <FirstPage/>
           <OurServices />
    <Consult />
    <Industries />
    </div>
  );
}

export default App;
