import Header from "./components/header/header";
import OurServices from "./components/our services/ourServices";
import "./App.css";
import FirstPage from "./components/first_page";
<<<<<<< HEAD
import Form from "./components/consultation/Form";
import Consult from "./components/consultation/Consult";
import TechStack from "./components/TechStack/techstack";
=======
import Consult from "./components/consultation/Consult"
import Industries from "./components/industries/industries";
>>>>>>> 4485e9e73e55c5dfaaf0b996efeb8dc3572e1c3f

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
