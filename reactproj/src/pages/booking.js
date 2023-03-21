import React from 'react';
import './FlightSearchForm.css';

const FlightSearchForm = () => {
  return (
    <div className="top-content">
      <div className="inner-bg" style={{padding: '0px 0px 80px 0'}}>
        <div className="container">
          <div className="row" style={{marginLeft: '17%', marginRight: '17%'}}>
            <div>
              <div className="form-box">
                <div className="form-top">
                  <div className="form-top-left">
                    <h3 className="form-title">Complete the Following</h3>
                  </div>
                  <div className="form-top-right">
                    <i className="fa fa-plane"></i>
                  </div>
                </div>
                <div className="form-bottom">
                  <form role="form" action="SearchFlights.do" method="post" className="flight-search-form">
                    <div className="row">
                      <div className="form-group col-lg-4 ui-widget">
                        <label htmlFor="from">From</label>
                        <input required type="text" name="from" placeholder="Departure City..." className="form-control" id="osearch" />
                      </div>
                      <div className="form-group col-lg-4 ui-widget">
                        <label htmlFor="to">To</label>
                        <input required type="text" name="to" placeholder="Destination City..." className="form-control" id="dsearch" />
                      </div>
                      <div className="form-group col-lg-4">
                        <label htmlFor="depart">Departure Date</label>
                        <input required type="date" name="depart" className="form-control" id="form-depart" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-lg-4">
                        <label htmlFor="class">Class</label>
                        <select required name="class" className="form-control" id="form-class">
                          <option value="Economy">Economy</option>
                          <option value="Business">Business</option>
                          <option value="First Class">First Class</option>
                        </select>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Search Flights</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightSearchForm;