import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import Home from './components/Home';
import StartBuilding from './components/StartBuilding';
import Future from './components/Future';
import Testimonials from './components/Testimonials';
import FAQs from './components/FAQs';
import SlidingImages from './components/SlidingImages';
import StartToday from './components/StartToday';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <AppNavbar />
    <Home />
    <StartBuilding />
    <Future />
    <Testimonials />
    <FAQs />
    <SlidingImages />
    <StartToday/> 
    <Footer />  
    </>
  );
}

export default App;
