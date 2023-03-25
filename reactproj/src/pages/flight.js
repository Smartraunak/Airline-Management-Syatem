import React, { useState } from "react";
import axios from "axios";
import './flight.css'
function Booking() {
  const [formData, setFormData] = useState({
    Origin: '',
    Destin: '',
    Date: '',
    Class: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://127.0.0.1:8000/search/', {
      date: formData["Date"],
      origin: formData["Origin"],
      dest: formData["Destin"],
      prf_class: formData["Class"],
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setFormData({
      ...formData,
      [name]: value
    });
  }
  return (
    <>
      <div className="background2">
      </div>
      <div className="form-bottom1" style={{ color: "white" }}>
        <form onSubmit={handleSubmit} className="flight-search-form">
          <div className="form-top1">
            <div className="form-top-left1">
              <h3 style={{ color: "white" }}>Search Flight</h3>
            </div>
        <br/>
          </div>
          <div className="row">
            <div className="form-group col-lg-4 ui-widget">
              <label htmlFor="Origin">From</label>
              <input required type="text" name="Origin" placeholder="Departure City..." className="form-control" id="osearch" value={formData.Origin} onChange={handleInputChange} />
            </div>
            <div className="form-group col-lg-4 ui-widget">
              <label htmlFor="Destin">To</label>
              <input required type="text" name="Destin" placeholder="Destination City..." className="form-control" id="dsearch" value={formData.Destin} onChange={handleInputChange} />
            </div>
            <div className="form-group col-lg-4">
              <label htmlFor="Date">Departure Date</label>
              <input required type="date" name="Date" className="form-control" id="form-depart" value={formData.Date} onChange={handleInputChange} style={{ height: "60px" }} />
            </div>
          </div>
          <br/>

          <div className="row">
            <div className="form-group col-lg-4">
              <label htmlFor="class">Class</label>
              <select required name="Class" className="form-control" id="form-class" value={formData.Class} onChange={handleInputChange} >
                <option value="Economy" >Economy</option>
                <option value="Business"> Business</option>
                <option value="First Class"> First Class</option>
              </select>
            </div>
            <div className="form-group col-lg-4 ab">
              <label htmlFor="people">No. of People</label>
              <input required type="number" min="1" max="10" placeholder="Number of People.." name="people" className="form-control" id="form-adults" />
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <button type="submit" className="bb">Search Flights</button>
          </div>
        </form>
      </div>
    
    </>
  )
}

export default Booking