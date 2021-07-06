import React from 'react';
import "./index.css";
import logo1 from './hhhh.jpg';

const Product = () => {
    return(
        <>
            <section className="product_page  mx-5">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card shadow">
                            {/* ########################### image hover property */}
                            <div className="inner">
                                <img src={logo1} class="card-img-top" alt="product"></img>

                            </div>
                        
                        <div class="card-body">
                            <h5 class="card-title text-center">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card shadow">
                        {/* ########################### image hover property */}
                        <div className="inner">
                                <img src={logo1} class="card-img-top" alt="product"></img>

                            </div>
                        <div class="card-body">
                            <h5 class="card-title text-center">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        </div>
                 </div>
                <div class="col">
                    <div class="card shadow">
                   {/* ########################### image hover property */}
                   <div className="inner">
                                <img src={logo1} class="card-img-top" alt="product"></img>

                            </div>
                    <div class="card-body">
                        <h5 class="card-title text-center">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card shadow">
                    {/* ########################### image hover property */}
                    <div className="inner">
                                <img src={logo1} class="card-img-top" alt="product"></img>

                            </div>
                    <div class="card-body">
                        <h5 class="card-title text-center">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card shadow">
                   {/* ########################### image hover property */}
                   <div className="inner">
                                <img src={logo1} class="card-img-top" alt="product"></img>

                            </div>
                    <div class="card-body">
                        <h5 class="card-title text-center">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
                <div class="col mb-5">
                    <div class="card shadow">
                   {/* ########################### image hover property */}
                   <div className="inner">
                                <img src={logo1} class="card-img-top" alt="product"></img>

                            </div>
                    <div class="card-body">
                        <h5 class="card-title text-center">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
                </div>
            </section>

        </>
    );

}
export default Product;