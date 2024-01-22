import React from 'react';
import futureImg1 from '../Assets/Images/future-img1.png';
import futureImg2 from '../Assets/Images/future-img2.png';
import futureImg3 from '../Assets/Images/future-img3.png';
import futureImg4 from '../Assets/Images/future-img4.png';
import futureImg5 from '../Assets/Images/future-img5.png';
import futureImg6 from '../Assets/Images/future-img6.png';

const Future = () => {
  return (
    <section className="section3">
      {/* Text */}
      <div className="container">
        <p className="text-center future ">The Future of Web3 NoCode </p>
        <p className="text-center future2">Web3Makr allows you to incorporate top-ranked blockchain platforms into your work through the drag and drop feature.</p>
      </div>
      {/* Text ends */}
      
      {/* Separation of list and images */}
      <div className="ms-5 mt-5">
        {/* List portion */}
        <div className="row" style={{ height: 'max-content' }}>
          <div className="col-3">
            <div className="row future-list active ps-2 pt-5" href="#">Multi-chain </div>
            <div className="row future-list dark ps-2 mt-1" href="#">Dashboard </div>
            <div className="row future-list dark ps-2 mt-1" href="#">Tool </div>
          </div>
          {/* List portion ends */}

          {/* Image portion */}
          <div className="col-9">
            <div className="container mt-4">
              <div className="row future-img-row" >
                {/* Row 1 */}
                <div className="col-md-3">
                  <div className="round-image-container">
                    <div className="future-img1">
                      <img src={futureImg1} className="round-image" alt="Image 1" />
                      <div className="image-text">
                        <p>Metamask Support</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="round-image-container">
                    <div className=" future-img2">
                      <img src={futureImg2} className="round-image" alt="Image 2" />
                      <div className="image-text">
                        <p>NFT Search</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="round-image-container">
                    <div className=" future-img3">
                      <img src={futureImg3} className="round-image" alt="Image 3" />
                      <div className="image-text">
                        <p>Moralis Integration</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row future-img-row2">
                {/* Row 2 */}
                <div className="col-md-3">
                  <div className="round-image-container">
                    <div className=" future-img4">
                      <img src={futureImg4} className="round-image" alt="Image 4" />
                      <div className="image-text">
                        <p>Solidity</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="round-image-container">
                    <div className=" future-img5">
                      <img src={futureImg5} className="round-image" alt="Image 5" />
                      <div className="image-text">
                        <p>Ether.js</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="round-image-container">
                    <div className=" future-img6">
                      <img src={futureImg6} className="round-image" alt="Image 6" />
                      <div className="image-text">
                        <p>Hardhat</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Image portion ends */}
        </div>
      </div>
      {/* Separation ends */}
    </section>
  );
};

export default Future;
