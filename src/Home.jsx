import React from "react";
import logo from './logo1.jpeg';
import logo1 from './hhhh.jpg';
import "./index.css";

import Product from "./Products";
import {NavLink} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faCalculator } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
    return (
        <>
            <section className="topslide">
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" >
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner shadow" >
                        <div class="carousel-item active">
                            <img src={logo} class="d-block w-100" alt="..."></img>
                            <div class="carousel-caption  d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={logo1} class="d-block w-100" alt="..."></img>
                            <div class="carousel-caption  d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={logo} class="d-block w-100" alt="..."></img>
                            <div class="carousel-caption  d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
            {/* about us section start */}
            <section className="main_heading my-5 ">
                <div className="mt-5 text-center">
                    <h1 className="display-4">about us</h1>
                    <hr className="mx-auto w-25 strong" />
                </div>

            </section>




            {/* about us section end */}
            <section>
                <div className="container">
                    <div className="row shadow">
                        <div className="col-sm-12 col-xl-6 col-xxl-6">
                            <div class="">
                                <figure>
                                    <img src={logo1} class="img-fluid" alt="aboutus" />
                                </figure>
                            </div>

                        </div>
                        <div className="col-sm-12 col-xl-6 col-xxl-6 d-flex justify-content-around aline-item-center flex-column">
                            <div class="">
                                <p>
                                    some demo text will go
                               </p>
                                <h1>some demo text will go hear</h1>
                            </div>

                        </div>

                    </div>

                </div>
            </section>


            {/* ###################### why to choose us ............... */}



            <section className="main_heading my-5 ">
                <div className="mt-5 text-center">
                    <h1 className="display-4">why to choose us</h1>
                    <hr className="mx-auto w-25 strong" />
                </div>

            </section>

            {/* ############################### */}
            <section className="choose_us ">
                <div className="container">
                    <div className="row shadow">
                        <p className="text-center">
                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                TRANSPORT
                        </a>
                            <button class="btn btn-primary m-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                WORKSHOP
                        </button>
                            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                SALES
                        </button>
                        </p>
                        <div class="collapse mb-3" id="collapseExample">
                            <div class="card card-body">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-12 col-xl-6 col-xxl-6">
                                            <div class="">
                                                <figure>
                                                    <img src={logo1} class="img-fluid" alt="aboutus" />
                                                </figure>
                                            </div>

                                        </div>
                                        <div className="col-sm-12 col-xl-6 col-xxl-6 d-flex justify-content-around aline-item-center flex-column">
                                            <div class="">
                                                <p>
                                                    some demo text will go
                                                 </p>
                                                <h1>some demo text will go hear</h1>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </section>


            {/* ############## why to chosse us end */}



            {/* about us section end */}


            <section className="main_heading my-5 ">
                <div className="mt-5 text-center">
                    <h1 className="display-4">featured products</h1>
                    <hr className="mx-auto w-25 strong" />
                </div>

            </section>
            {/* ###################  products by the use of component */}
            <section className="container shadow">
                <Product></Product>
                <Product></Product>
            </section>







            <section className="main_heading my-5">
                <div className="mt-5 text-center">
                    <h1 className="display-4">companies we deal with</h1>
                    <hr className="mx-auto w-25 strong" />
                </div>

            </section>
            <section>
                <div className="container-fluid shadow">
                    <div className="row">
                        <div className="col-md-6 col-xl-12 col-xxl-12 col-sm-12">
                            {/* <img src={logo1} class="rounded" alt="company"></img> */}
                            <hr className="d-bold" />
                            <div className="px-5 py-5">
                                {/* 88888888888888888888888888 place for image  */}

                            </div>
                            <hr />
                        </div>

                    </div>

                </div>
            </section>
            <section className="main_heading my-5 ">
                <div className="mt-5 text-center">
                    <h1 className="display-4">CONTACT US </h1>
                    <hr className="mx-auto w-25 strong" />
                </div>

            </section>
            <div className="container shadow ">
                <div className="row">
                    <div className="col">
                        <h1 className="text-center">
                            section 1<br></br>
                                lkjdf<br></br>
                                dfwf<br></br>
                                fwfw<br></br>
                                section 1<br></br>
                                lkjdf<br></br>
                                dfwf<br></br>
                                fwfw<br></br>
                        </h1>

                    </div>
                    <div className="col">
                        <h1 className="text-center">
                            section 2
                                section 1<br></br>
                                lkjdf<br></br>
                                dfwf<br></br>
                                fwfw<br></br>
                                section 1<br></br>
                                lkjdf<br></br>
                                dfwf<br></br>
                                fwfw<br></br>
                        </h1>

                    </div>


                </div>

            </div>

            <section>

            </section>

            <section>
                          
                <footer class="page-footer font-small mdb-color pt-4">

               
                <div class="container text-center text-md-left">

                  
                    <div class="row text-center text-md-left mt-3 pb-3">

                    
                    <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h6 class="text-uppercase mb-4 font-weight-bold">Company LOGO</h6>
                        <p>discription will go here</p>
                    </div>
                    
                    <hr class="w-100 clearfix d-md-none"></hr>

                   
                    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h6 class="text-uppercase mb-4 font-weight-bold">Products</h6>
                        <p>
                        <a href="#!">HARDWEAR</a>
                        </p>
                        <p>
                        <a href="#!">HYDROLICS</a>
                        </p>
                        <p>
                        <a href="#!">TRANSPORTING</a>
                        </p>
                        <p>
                        <a href="#!">EARTH MOVERS</a>
                        </p>
                    </div>
                    

                    <hr class="w-100 clearfix d-md-none"></hr>

                   
                    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h6 class="text-uppercase mb-4 font-weight-bold">Useful links</h6>
                        <p>
                        <a href="#!">HOME</a>
                        </p>
                        <p>
                        <a href="#!">CONTACT</a>
                        </p>
                        <p>
                        <a href="#!">SERVICES</a>
                        </p>
                        <p>
                        <a href="#!">PRODUCTS</a>
                        </p>
                        <p>
                        <a href="#!">ABOUT US</a>
                        </p>
                    </div>

                   
                    <hr class="w-100 clearfix d-md-none"></hr>

                    
                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
                        <p>
                        <FontAwesomeIcon icon="check-square" />
                        <i class="faCalculator"></i>ADRESS LINE</p>
                        <p>
                        <i class="fas fa-envelope mr-3"></i> FERM@gmail.com</p>
                        <p>
                        <i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                        <p>
                        <i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
                    </div>
                    

                    </div>
                    

                    <hr></hr>

                   
                    <div class="row d-flex align-items-center">

                    
                    <div class="col-md-7 col-lg-8">

                       
                        <p class="text-center text-md-left">© 2020 Copyright:
                        <a href="https://RAJANRAJ.com/">
                            <strong> RAJAN RAJ.com</strong>
                        </a>
                        </p>

                    </div>
                    

                    
                    
                    

                    </div>
                    

                </div>
                

                </footer>


            </section>


            {/* #################### footer area start */}

               {/* <section className="footer mt-5  ">
                <div class="container-fluid  shadow">
                    
                    <div class="row row-cols-1 row-cols-md-3 g-4 ">
                        <div class="col" >
                         <div className="footer_logo ">
                             <figure >
                                 <img src={logo} alt="ravi hydrolics" />
                             </figure>

                         </div>
                        </div>
                        <div class="col">
                        <div class="list-group mt-4 ">
                            <a  class="list-group-item list-group-item-action active text-center" aria-current="true">
                                <NavLink
                                    className="footer_link"
                                    // activeClassName = "meanu_active"
                                    // className="nav-link " 
                                    aria-current="page" to="/Home">HOME
                                </NavLink>
                            </a>
                            <a  class="list-group-item list-group-item-action text-center">
                                <NavLink
                                    className="footer_link"
                                    // activeClassName = "meanu_active"
                                    // className="nav-link " 
                                    aria-current="page" to="/Contact">CONTACT
                                </NavLink>
                            </a>
                            <a class="list-group-item list-group-item-action text-center">
                                <NavLink
                                    className="footer_link"
                                    // activeClassName = "meanu_active"
                                    // className="nav-link " 
                                    aria-current="page" to="/Service">SERVICE
                                </NavLink></a>
                            <a  class="list-group-item list-group-item-action text-center">
                                <NavLink
                                    className="footer_link"
                                    // activeClassName = "meanu_active"
                                    // className="nav-link " 
                                    aria-current="page" to="/Products">PRODUCTS
                                </NavLink>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action text-center ">
                                <NavLink
                                    className="footer_link"
                                    // activeClassName = "meanu_active"
                                    //  className="nav-link " 
                                    aria-current="page" to="/About">ABOUT US
                                </NavLink>
                            </a>
                        </div>
                        </div>
                        <div class="col">
                        3 of 3
                        1 of 3
                        1 of 3<br></br>
                        1 of 3<br></br>
                        1 of 3<br></br>
                        1 of 3<br></br>
                        1 of 3<br></br>
                        1 of 3<br></br>
                        1 of 3<br></br>
                        1 of 3<br></br>
                        
                        

                        </div>
                    </div>
                </div>


                </section>

              #################### footer area start */}






        </>
    );
};

export default Home;

// <section id="header" className="">
//                 <div className="container-fluid nav_bg">
//                     <div className="row">
//                         <div className="col-10 mx-auto">
//                             <div className="col-md-6 mt-5 pt-lg-0 order-2 order-lg-1">
//                                 <h1>
//                                     welcome to <strong className="brand-name">ferm name </strong>
//                                 </h1>
//                                 <h2 className="my-3">we buld</h2>
//                                 <div className="mt-3">
//                                     <button type="button" class="btn btn-success">Get Started</button>
//                                 </div>
//                                 <div col-lg-6 order-1 order-lg-1 img-header>
//                                     <h1>oplace of image</h1>
//                                 </div>

//                             </div> 

//                         </div>
//                     </div>
//                 </div>
//             </section>