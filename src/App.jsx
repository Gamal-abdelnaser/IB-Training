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
import CalorieCalculator from "./components/calcolator/calcolator";
import { DarkProvider } from "./components/darkLight/darkContext";
import { CoatchesProvider } from "./components/coatches/coatchesContext";
import CoachesDetails from "./components/coatches/coatchesDetails";
function App() {

  return (
    < div className="" >
      <DarkProvider>
        
        <Header />
        <TrainingProvider>
          <CoatchesProvider>
            <Routes>
              <Route path="/"  element={<Home />}/>
              <Route path="/programs"  element={<Programs />}/>
              <Route path="/coatches"  element={<Coaches />}/>
              <Route path="/heros"  element={<Heros />}/>
              <Route path="/aboutUs"  element={<PhoneNumberInput />}/>
              <Route path="/admin"  element={<AdminDashboard />}/>
              <Route path="/form"  element={<Form />}/>
              <Route path="/calcolator"  element={<CalorieCalculator />}/>
              <Route path="/training-details"  element={< TrainingDetails/>}/>
              <Route path="/coatches-details"  element={< CoachesDetails/>}/>
            </Routes>
            </CoatchesProvider>
        </TrainingProvider>

      </DarkProvider>
        {/* <Footer /> */}
        <ScrollTop />
      
    </div>
  )
}

export default App
