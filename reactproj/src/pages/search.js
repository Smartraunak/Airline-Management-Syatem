import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './search.css';
// FlightsPage.js

function FlightsPage(props){
    const { location } = props;
    const { state } = location || {};
    const origin_name = state?.origin_name;
    const dest_name = state?.dest_name;
    const date = state?.date;
    const [flights, setFlights] = useState([]);
    const [selectedClass, setSelectedClass] = useState('economy');
    console.log(origin_name)
    useEffect(() => {
        const fetchFlights = async () => {
            if (origin_name && dest_name && date) {
                const response = await axios.get(`http://127.0.0.1:8000/flight/?origin_name=${origin_name}&dest_name=${dest_name}&date=${date}`);
                setFlights(response.data.flights);
            }
        };
        fetchFlights();
    }, [origin_name, dest_name, date]);
    const handleClassChange = (e) => {
        setSelectedClass(e.target.value);
    }
    console.log(flights)

    const getPriceForClass = (flight) => {
        if (selectedClass === 'economy') {
            return flight.Eco_fair();
        } else if (selectedClass === 'business') {
            return flight.busi_fair();
        } else if (selectedClass === 'first') {
            return flight.first_fair();
        }
    }



    return (
        <>
            <div className="top-content">
                <div className="inner-bg" style={{ padding: "0px 0px 80px 0" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="form-box">
                                    <form className='ad'>
                                        <div className="form-top">
                                            <div className="form-top-left">
                                                <h2>Flights</h2>
                                            </div>
                                            <div className="form-top-right">
                                                <i className="fa fa-plane"></i>
                                            </div>
                                        </div>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Flight ID</th>
                                                    <th>Departure City</th>
                                                    <th>Arrival City</th>
                                                    <th>Departure Time</th>
                                                    <th>Arrival Time</th>
                                                    <th>Class</th>
                                                    <th>Fair</th>
                                                    <th>Seats</th>

                                                </tr>
                                            </thead>
                                            <tbody>

                                                {flights.map((flight, index) => (
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{flight.flight_id}</td>
                                                        <td>{flight.origin_name}</td>
                                                        <td>{flight.dest_name}</td>
                                                        <td>{flight.start}</td>
                                                        <td>{flight.end}</td>
                                                        <td>
                                                            <label>
                                                                <input type="radio" name="class" value="economy" checked={selectedClass === 'economy'} onChange={handleClassChange} />
                                                                Economy
                                                            </label>
                                                            <label>
                                                                <input type="radio" name="class" value="business" checked={selectedClass === 'business'} onChange={handleClassChange} />
                                                                Business
                                                            </label>
                                                            <label>
                                                                <input type="radio" name="class" value="first" checked={selectedClass === 'first'} onChange={handleClassChange} />
                                                                First Class
                                                            </label>
                                                        </td>
                                                        <td>{getPriceForClass}</td>
                                                        <td> <input type='submit' className='btn btn-primary flex-row-reverse' value='Select' /></td>
                                                    </tr>

                                                ))}



                                            </tbody>
                                        </table>
                                    </form >
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>

    );
}

export default FlightsPage;
