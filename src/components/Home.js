import React from 'react';
import Products from './Products';
import Footer from './Footer';

function Home() {
    return (
        <div class="container mt-3">
            <div className="hero">
                <div className="card bg-dark text-white">
                    <img src="/images/bg.jpg" className="card-img " alt="Background" height="500px" />
                    <div className="card-img-overlay d-flex flex-column justify-content-center">
                        <div className="container text-center">
                            <h5 className="card-title display-3 fw-bolder mb-0">Make every moment fashionable!</h5>
                            <p className="card-text lead fs-2 mb-0 fw-bolder">Great clothes, Great ideas</p>
                            <p className="card-text lead fs-3 fw-bolder">Lower price than ever</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
            The term of web e-commerce may not be familiar among internet users. However, the procedure of web e-commerce has definitely been known by a lot of people. Web e-commerce is a form of website to sell tangible products or kinds of services online. This method is applied as internet marketing affirms its position into the most important tool in a business. Thus, the main focus of web e-commerce is to draw customers and eventually gain profits from the business.
            </div>
            <div className='mt-3'>
        Easy Shop is one stop shop for all your fashion and lifestyle needs.Easy Shop Being an e-commerce store for fashion and everyday products. Easy Shop aims at providing a hassle free and enjoyable shopping experience to shoppers across the world with widest range of brands and products on it's portal. The band is trying to bring the power of fashion to shoppers in the most affordable prices and using an easy access through online sources.
            </div>
        </div>


    )
}

export default Home;