import React, { useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JavaScript

const FAQs = () => {
    useEffect(() => {
        // Enable Bootstrap collapse functionality
        var collapseButtons = document.querySelectorAll('.toggle-description');
        collapseButtons.forEach((button) => {
            button.addEventListener('click', function () {
                var targetId = this.getAttribute('data-bs-target');
                var targetElement = document.querySelector(targetId);
                var isCollapsed = targetElement.classList.contains('show');
                
                if (isCollapsed) {
                    targetElement.classList.remove('show');
                } else {
                    targetElement.classList.add('show');
                }
            });
        });
    }, []);

    return (
        <section className="section5">
        <div className="row">
            <div className="col-md-6">
                <div className="container p-5 ms-4 sec5-text">
                    <h1 className="mt-5 ms-5 ps-5 sec5-heading">Frequently asked questions</h1>
                    <h3 className="ps-5 pt-4 ms-5 sec5-desc">Have a question? Check out our frequently asked questions to find your
                        answer.</h3>
                </div>
            </div>
            <div className="col-md-6">

                {/* List with description toggle buttons */}
                <div className="container p-5 mt-5">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-between align-items-center list-heading">
                            What is Web3Makr and what does it do?
                            <button className="btn toggle-description" data-bs-toggle="collapse" data-bs-target="#description1"
                                aria-expanded="false" aria-controls="description1">+</button>
                        </li>
                        <div className="collapse" id="description1">
                            <div className="card card-body list-desc">
                                Web3Makr is an innovative platform designed to empower web3 developers and beginners by simplifying the 
                                creation of blockchain-based applications. With its user-friendly drag-and-drop feature, Web3Makr enables
                                users to seamlessly integrate essential properties such as NFT Search Marketplace, Wallet Integration,
                                downloadable source code, and Smart Contracts. Moreover, the platform provides a rich collection of ready-made
                                and customizable templates, allowing users to expedite the development of their web3 applications with ease.
                            </div>
                        </div>

                        <li className="list-group-item d-flex justify-content-between align-items-center list-heading">
                            Why should I use Web3Mkr?
                            <button className="btn toggle-description" data-bs-toggle="collapse" data-bs-target="#description2"
                                aria-expanded="false" aria-controls="description2">+</button>
                        </li>
                        <div className="collapse" id="description2">
                            <div className="card card-body list-desc">
                                Web3makr provides a solution for web3 developers and beginners by integrating the drag and drop feature
                                for properties like NFT Search Marketplace, Wallet Integration, downloadable source code, and Smart
                                Contract. Aside from this, the software also provides its users with ready-made and customizable
                                templates that users can use when creating their web3 applications.
                            </div>
                        </div>

                        <li className="list-group-item d-flex justify-content-between align-items-center list-heading">
                        How does Web3Makr support developers in building blockchain applications?
                        <button className="btn toggle-description" data-bs-toggle="collapse" data-bs-target="#description3"
                                aria-expanded="false" aria-controls="description3">+</button>
                        </li>
                        <div className="collapse" id="description3">
                            <div className="card card-body list-desc">
                            Web3Makr supports developers by offering a user-friendly drag-and-drop feature for integrating key properties like 
                            NFT Search Marketplace, Wallet Integration, downloadable source code, and Smart Contracts. Additionally, it provides
                            a diverse range of ready-made and customizable templates, streamlining the development process and empowering users to 
                            create robust web3 applications efficiently.
                            </div>
                        </div>
                    </ul>
                </div>

            </div>
        </div>
        <div className="row our-blog">
            <h1>Our blog</h1>
        </div>
    </section>
    );
};

export default FAQs;


