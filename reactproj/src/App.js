import './App.css';
import Header from './components/header';
import Sign from './pages/sign';
import LoginForm from './pages/login';
import Footer from './components/footer';
import Home from './pages/home';
import FlightTable from './pages/search';
import FlightsPage from './pages/addflight';
import Booking from './pages/booking';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormPage from './pages/flight2';
function App() {

  const [origin_name, setOrigin_name] = useState('');
  const [dest_name, setDest_name] = useState('');
  const [date, setDate] = useState('');
  const [people, setPeople] = useState('');

  function handleInputSubmit(origin_name, dest_name, date,people) {
    setOrigin_name(origin_name);
    setDest_name(dest_name);
    setDate(date)
    setPeople(people)
  }
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Sign />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/SearchFlight" element={<FormPage onInputSubmit={handleInputSubmit}/>} />
          {console.log(origin_name)}
          <Route path='/Book' element= {origin_name && dest_name && date ? <FlightTable origin_name={origin_name} dest_name={dest_name} date={date}/> : null}/>
          <Route path='/Book/passenger' element= {people ? <Booking people ={people}/> : null}/>
          <Route path='/Admin/AddFlight' element={<FlightsPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
