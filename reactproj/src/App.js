import './App.css';
import Header from './components/header';
import Sign from './pages/sign';
import LoginForm from './pages/login';
import Footer from './components/footer';
import Home from './pages/home';
import Booking from './pages/flight2';
import FlightTable from './pages/search';
import FlightsPage from './pages/addflight';

import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
    <BrowserRouter>
    <Routes>
      <Route  exact path="/" element={<Sign/>}/>
      <Route  path="/login" element={<LoginForm/>}/>
      <Route  path="/home" element={<Home/>}/>
      <Route path="/SearchFlight" element={<Booking/>}/>
      <Route path='/Book' element={<FlightTable/>}/>
      <Route path='/Admin/AddFlight' element={<FlightsPage/>}/>
    </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
