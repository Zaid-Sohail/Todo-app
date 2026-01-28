
import './App.css'
import './index.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { createBrowserRouter } from 'react-router-dom';
import ServiceDetail from './components/Servicesdetail';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Services/>
    },
    {
      path:'/services/:serviceName',
      element:<ServiceDetail/>
    }
  ])
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
