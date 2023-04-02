import React, { useState } from 'react';
import './booking.css'
import axios from 'axios';

function Booking(props) {
    const [PassengerList, setPassengerList] = useState(Array.from({ length: props.n }, () => ({ name: '', age: '' })));
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');

    const handleInputChange = (event, index) => {
        const { name, value } = event.target;
        const list = [...PassengerList];
        list[index][name] = value;
        setPassengerList(list);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/flight/', PassengerList)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <div className="background"></div>
            <div className="form-bottom1" style={{ color: "white" }}>
                <form onSubmit={handleSubmit} className="flight-search-form">
                    <div className="form-top1">
                        <div className="form-top-left1">
                            <h3 style={{ color: "white" }}>Passenger Details</h3>
                        </div>
                        <br />
                    </div>
                    {PassengerList.map((passList1, index) => (
                        <div className="row" key={index}>
                            <div className="form-group col-lg-4 ui-widget">
                                <label htmlFor={`passenger${index}`}>Name</label>
                                <input required type="text" name={`passenger${index}`} placeholder="Name" className="form-control" id={`osearch${index}`} value={PassengerList[index].name} onChange={(e) => handleInputChange(e, index)} />
                            </div>
                            <div className="form-group col-lg-4 ui-widget">
                                <label htmlFor={`Age${index}`}>Age</label>
                                <input required type="text" name={`Age${index}`} placeholder="Age" className="form-control" id={`dsearch${index}`} value={PassengerList[index].age} onChange={(e) => handleInputChange(e, index)} />
                            </div>
                        </div>
                    ))}
                    <br />
                    <div className="row">
                        <div className="form-group col-lg-4">
                            <label htmlFor="mobile">Mobile No.</label>
                            <input required type="number" placeholder="Mobile" className="form-control" id="form-class" value={mobile} onChange={(event) => setMobile(event.target.value)} />
                        </div>
                        <div className="form-group col-lg-4">
                            <label htmlFor="address">Address</label>
                            <input required type="text" placeholder="Address" name="address" className="form-control" id="form-adults" value={address} onChange={(event) => setAddress(event.target.value)} />
                        </div>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <button type="submit" className="bb">Book</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Booking;
