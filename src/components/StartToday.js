import React from 'react';
import Group146 from '../Assets/Images/Group 146.png';
const StartToday = () => {
  return (
    <section className="section7">
      <div className="row w-100">
        <div className="col-md-6">
          <img src={Group146} className="start" alt="" />
        </div>
        <div className="col-md-6">
          <p className="mt-5 start-text mx-auto">Start a free trial today</p>
          <br />
          <p className="start-text2 mx-auto">No credit card required.</p>
          <br />
          <button type="button" className="btn btn-custom">
            Start for free
          </button>
        </div>
      </div>
    </section>
  );
};

export default StartToday;
