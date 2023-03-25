import React, { useState } from 'react';
import axios from 'axios';
import './addFlight.css';
// FlightsPage.js

function FlightsPage() {
    const [flightList, setflightList] = useState([{
        flight_id: '',
        origin_name: '',
        dest_name: '',
        start: '',
        end: '',
        Eco_fair: '',
        first_fair: '',
        busi_fair: '',
        date: '',
        airline: ''

    }]);
    const handleInputChange = (event, index) => {
        const { name, value } = event.target;
        const list = [...flightList];
        list[index][name] = value;
        setflightList(list);
      };
      

    const handleAddClick = () => {
        setflightList([
            ...flightList,
            {
                flight_id: '',
                origin_name: '',
                dest_name: '',
                start: '',
                end: '',
                Eco_fair: '',
                first_fair: '',
                busi_fair: '',
                date: '',
                airline: ''
            }]);
    };

    const handleRemoveClick = (index) => {
        const list = [...flightList];
        list.splice(index, 1);
        setflightList(list)
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/flight/', flightList)

            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }


    return (
        <>
            <div className="top-content1">
                <div className="inner-bg" style={{ padding: "0px 0px 80px 0" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="form1-box">
                                    <form onSubmit={handleSubmit} className="ab">
                                        <div className="form1-top">
                                            <div className="form1-top-left">
                                                <h2>Flights</h2>
                                            </div>
                                            <div className="form1-top-right">
                                                <i className="fa fa-plane"></i>
                                            </div>
                                        </div>

                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Flight ID</th>
                                                    <th>Departure City</th>
                                                    <th>Arrival City</th>
                                                    <th>Departure Time</th>
                                                    <th>Arrival Time</th>
                                                    <th>Date</th>
                                                    <th>Economy</th>
                                                    <th>Business</th>
                                                    <th>First Class</th>
                                                    {/* <th>Seats</th> */}
                                                    <th>Airline</th>
                                                </tr>
                                            </thead>
                                            
                                                {flightList.map((flightList1, index) => (
                                                    <tbody>
                                                    <tr key={index}>
                                                        <td><input type="number" id="flight_id" name="flight_id" value={flightList[index].flight_id}  onChange={(e) => handleInputChange(e, index)}/></td>
                                                        <td><input type="text" id="origin_name" name="origin_name" value={flightList[index].origin_name} onChange={(e) => handleInputChange(e, index)}/></td>
                                                        <td><input type="text" id="destin_name" name="dest_name" value={flightList[index].dest_name} onChange={(e) => handleInputChange(e, index)}/></td>
                                                        <td><input type="Time" id="start" name="start" value={flightList[index].start} onChange={(e) => handleInputChange(e, index)}/></td>
                                                        <td><input type="Time" id="end" name="end" value={flightList[index].end} onChange={(e) => handleInputChange(e, index)}/></td>
                                                        <td><input type="Date" id="date" name="date" value={flightList[index].date} onChange={(e) => handleInputChange(e, index)}/></td>
                                                        <td><input type="number" id="Eco_fair" name="Eco_fair" value={flightList[index].Eco_fair} onChange={(e) => handleInputChange(e, index)}/></td>
                                                        <td><input type="number" id="busi_fair" name="busi_fair" value={flightList[index].busi_fair} onChange={(e) => handleInputChange(e, index)}/></td>
                                                        <td><input type="number" id="first_fair" name="first_fair" value={flightList[index].first_fair} onChange={(e) => handleInputChange(e, index)}/></td>
                                                        {/* <td><input type="text" id="flight_id" name="flight_id" value={flightList[index].flight_id} onChange={(e) => handleInputChange(e, index)}/></td> */}
                                                        <td><input type="text" id="airline" name="airline" value={flightList[index].airline} onChange={(e) => handleInputChange(e, index)}/></td>
                                                        <td>{flightList.length>1 &&(<input type='remove' className='btn btn-primary flex-row-reverse' value='Remove' onClick={() =>handleRemoveClick(index)} />)}</td>
                                                       
                                                    </tr>
                                                    {
                                                            flightList.length - 1 === index && flightList.length < 3 && (
                                                                <button type='button' onClick={handleAddClick} className="add" >Add</button>
                                                            )
                                                 }
                                                    </tbody>
                                                ))}
                                            

                                        </table>
                                      <div style={{paddingLeft:"1500px"}}><button type='submit' style={{width:'80%'}}>Save</button></div>

                                    </form>

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
