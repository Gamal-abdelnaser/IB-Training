import { Routes, Route } from "react-router-dom";
import Header from './components/header/header';
import Programs from './components/programs/programs';
import Coaches from './components/coatches/coatchs';
import Heros from './components/heros/heros';
import Home from "./components/home/home";
// import Footer from "./components/footer.jsx/footer";
import { TrainingProvider } from "./components/programs/TrainingContext";
import TrainingDetails from './components/programs/TrainingDetails'
import AdminDashboard from "./components/adminDashbord/admin";
import Form from "./components/form/form";
import ScrollTop from "./components/scroll/scrollTop";
import PhoneNumberInput from "./components/about/about"
function App() {

  return (
    < div className="" >
      <Header />
        <TrainingProvider>
          {/* <SectionsProvider> */}
            <Routes>
              <Route path="/"  element={<Home />}/>
              <Route path="/programs"  element={<Programs />}/>
              <Route path="/coatches"  element={<Coaches />}/>
              <Route path="/heros"  element={<Heros />}/>
              <Route path="/aboutUs"  element={<PhoneNumberInput />}/>
              <Route path="/admin"  element={<AdminDashboard />}/>
              <Route path="/form"  element={<Form />}/>
              <Route path="/training-details"  element={< TrainingDetails/>}/>
            </Routes>
          {/* </SectionsProvider> */}
        </TrainingProvider>

        {/* <Footer /> */}
        <ScrollTop />
      
    </div>
  )
}

export default App
