// StartBuilding.js

import React from 'react';
import Group150 from '../Assets/Images/Group 150.png';
import Group151 from '../Assets/Images/Group 151.png';
import Group152 from '../Assets/Images/Group 152.png';
import Group153 from '../Assets/Images/Group 153.png';
import Group154 from '../Assets/Images/Group 154.png';
import Group155 from '../Assets/Images/Group 155.png';
import Group156 from '../Assets/Images/Group 156.png';
import Group167 from '../Assets/Images/Group 167.png';
import Bookmark from '../Assets/Images/Bookmark.png';
import Rectangle52 from '../Assets/Images/Rectangle 52.png';
import Icon from '../Assets/Images/Icon.png';
import Rectangle53 from '../Assets/Images/Rectangle 53.png';
import Feature1 from '../Assets/Images/Feature 1.png';
import Feature3 from '../Assets/Images/Feature 3.png';
import dashboard from '../Assets/Images/dashboard.png';
import StatsCopy3 from '../Assets/Images/Stats Copy 3.png';
import Activ from '../Assets/Images/Activ.png';
import Rectangle54 from '../Assets/Images/Rectangle 54.png';
import StatsCopy32 from '../Assets/Images/32px.png';

const StartBuilding = () => {
    return (
        <section className="start-building">
            <div className="container">
                <div className="row">
                    <ul className="image-list">
                        <li><img src={Group150} alt="" /></li>
                        <li><img src={Group151} alt="" /></li>
                        <li><img src={Group152} alt="" /></li>
                        <li><img src={Group153} alt="" /></li>
                        <li><img src={Group154} alt="" /></li>
                        <li><img src={Group155} alt="" /></li>
                        <li><img src={Group156} alt="" /></li>
                    </ul>
                </div>
            </div>
            <div className="part1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="container">
                                <p className="Text1">Create your own Web3 Masterpiece</p>
                                <p className="Text2">
                                    Most entrepreneurs want to create their own web3 sites, unfortunately, they don't know much about creating
                                    one. Web3Makr makes it easier for newbies to create a blockchain-based collectibles solution without the
                                    hassle of leaving their favorite creation tools and by simple drag and drop functionality.
                                </p>
                                <button type="button" className="btn btn-custom">Start building</button>
                            </div>
                        </div>
                        <div className="col-md-6 container image1">
                            <img src={Group167} className="w-100" alt="Web3 Masterpiece" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="part2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="container" id="frame">
                                <div className="row">
                                    {/* Card 1 */}
                                    <div className="col">
                                        <div className="card" style={{ backgroundColor: '#f8f8f8', marginTop: '15%', marginLeft: '10%', paddingBottom: '8%', height: '381px', width: '333px' }}>
                                            <div className="row" style={{ height: '85%' }}>
                                                <div className="col-md-6 me-auto" style={{ paddingTop: '5%', paddingLeft: '13%' }}>
                                                    <h5 className="card-title">Daily News</h5>
                                                </div>
                                                <div className="col-md-2 me-4 my-4">
                                                    <img src={Bookmark} alt="Bookmark" className="bookmark-image" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <img src={Rectangle52} alt="Card 1 Image" className="card-img-top card-img" style={{ marginLeft: '7%', height: '152px', width: '276px' }} />
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <p className="card-text" style={{ fontFamily: 'sans-serif' }}>Create screens directly in Method or add your images from Sketch…</p>
                                                <button className="btn btn-custom" id="btn2">Read More</button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End of card 1 */}
                                    {/* Start of Card 2 */}
                                    <div className="col">
                                        <div className="card card2" style={{ backgroundColor: '#f8f8f8' }}>
                                            <div className="row" style={{ height: '85%' }}>
                                                <div className="col-md-6 me-auto" style={{ paddingTop: '5%', paddingLeft: '13%' }}>
                                                    <h5 className="card-title">Activity</h5>
                                                </div>
                                                <div className="col-md-2 me-4 my-4">
                                                    <img src={Icon} alt="Bookmark" id="Bookmark" />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-9" style={{ paddingLeft: '10%', marginTop: '-5%' }}>
                                                    <span className="card-text" id="text4" style={{ fontFamily: 'sans-serif' }}>
                                                        Check out each column for more details
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <img
                                                    src={Rectangle53}
                                                    alt="Card 1 Image"
                                                    className="card-img-top card-img"
                                                    style={{ marginLeft: '7%', marginTop: '7%', height: '152px', width: '276px' }}
                                                />
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6" style={{ padding: '8%' }}>
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <img src={Feature1} alt="" id="features" />
                                                        </div>
                                                        <div className="col-md-8" id="stats">
                                                            <p>Total Sales</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 feature3" style={{ padding: '8%' }}>
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <img src={Feature3} alt="" id="features" />
                                                        </div>
                                                        <div className="col-md-8" id="stats">
                                                            <p>Profit</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="container row" style={{ marginTop: '-11%', marginLeft: '-2%' }}>
                                                <div className="col-md-7">
                                                    <img src={dashboard} alt="" id="features" />
                                                </div>
                                                <div className="col-md-5">
                                                    <div className="row">
                                                        <div className="col-md-4 feature4">
                                                            <img src={StatsCopy3} alt="" id="features" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End of Card 2 */}
                                </div>
                                {/* Start of Card 3 */}
                                <div className="row" style={{ marginTop: '5%' }}>
                                    <div className="col">
                                        <div className="card card3">
                                            <div className="container me-auto">
                                                <div className="row">
                                                    <div className="col-md-6 me-auto" style={{ paddingTop: '7%', paddingLeft: '8%' }}>
                                                        <h5 className="card-title">Total Sales</h5>
                                                    </div>
                                                    <div className="col-md-2 me-1 my-5">
                                                        <img src={StatsCopy32} alt="Bookmark" id="Bookmark" />
                                                    </div>
                                                </div>
                                                <div className="col-md-9 card-text" style={{ paddingLeft: '10%', paddingBottom: '5%' }}>
                                                    <span className="text" id="text4" style={{ fontFamily: 'sans-serif' }}>
                                                        Check out each column for more details
                                                    </span>
                                                </div>
                                                <div className="col-md-12">
                                                    <img
                                                        src={Activ}
                                                        alt="Card 1 Image"
                                                        className="card-img-top card-img"
                                                        style={{ marginLeft: '7%', height: '152px', width: '276px' }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* End of Card 3 */}
                                    {/* Start of Card 4 */}
                                    <div className="col">
                                        <div className="card card4" style={{ backgroundColor: '#f8f8f8' }}>
                                            <div className="row">
                                                <div className="col-md-6 me-auto" style={{ paddingTop: '5%', paddingLeft: '13%' }}>
                                                    <h5 className="card-title">Activity</h5>
                                                </div>
                                                <div className="col-md-2 me-4 my-4">
                                                    <img src={StatsCopy32} alt="Bookmark" id="Bookmark" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-9" style={{ paddingLeft: '10%', marginTop: '-5%' }}>
                                                    <span className="card-text" id="text4" style={{ fontFamily: 'sans-serif' }}>
                                                        Check out each column for more details
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <img
                                                    src={Rectangle54}
                                                    alt="Card 1 Image"
                                                    className="card-img-top card-img"
                                                    style={{ marginLeft: '7%', marginTop: '7%', height: '152px', width: '276px' }}
                                                />
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6" style={{ padding: '8%' }}>
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <img src={Feature1} alt="" id="features" />
                                                        </div>
                                                        <div className="col-md-8" id="stats">
                                                            <p>Total Sales</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6" style={{ padding: '8%' }}>
                                                    <div className="row">
                                                        <div className="col-md-4 feature3">
                                                            <img src={Feature3} alt="" id="features" />
                                                        </div>
                                                        <div className="col-md-8" id="stats">
                                                            <p>Profit</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="container row" style={{ marginTop: '-11%', marginLeft: '-2%' }}>
                                                <div className="col-md-7">
                                                    <img src={dashboard} alt="" id="features" />
                                                </div>
                                                <div className="col-md-5">
                                                    <div className="row">
                                                        <div className="col-md-4 feature4">
                                                            <img src={StatsCopy3} alt="" id="features" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End of Card 4 */}



                                </div>
                            </div>
                        </div>
                        <div className="col-md-4" id="text-list">
                            <div className="container">
                                <p className="Text3">Can be changed to customizable ready-made web3 dapps templates.</p>
                                <ol className="list1" style={{ color: '#18ADE4' }}>
                                    <li><span style={{ color: '#979797' }}>NFT(ERC721).</span></li>
                                    <li><span style={{ color: '#979797' }}>DEFI</span></li>
                                    <li><span style={{ color: '#979797' }}>Smart Contracts</span></li>
                                    <li><span style={{ color: '#979797' }}>GameFi</span></li>
                                    <li><span style={{ color: '#979797' }}>Metaverse</span></li>
                                </ol>
                                <button type="button" className="btn btn-custom mb-5" id="btn2">Start building</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StartBuilding;
