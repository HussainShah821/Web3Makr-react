import React from 'react';
import section4Img from '../Assets/Images/section4-img.png';

const Testimonials = () => {
  return (
    <section className="section4">
      <div className="container pt-5 p-4">
        <h6 style={{ color: '#C5AED2' }}>Testimonials</h6>
        <br />
        <h1 className="text-white">What People Are Saying</h1>
        <br />
        <h5 className="text-white">Multi chain interoperability</h5>
        <br />
        <div className="row">
          <div className="col">
            <img src={section4Img} className="w-100 pt-2" alt="" />
          </div>
          <div className="col">
            <p className="sec4-desc p-5">
              “Web3makr provides a solution for web3 developers and beginners by integrating the drag and drop feature
              for properties like NFT Search Marketplace, Wallet Integration, downloadable source code, and Smart
              Contract. Aside from this, the software also provides its users with ready-made and customizable templates
              that users can use when creating their web3 applications.”
              <br />
              <br />
              - Sophie Adderiy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
