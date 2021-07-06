import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Service from "./Service";
import Navbar from "./Navbar"; 
import About from "./About";
import Contact from "./Contact";
import { Redirect, Route, Switch } from 'react-router';
import "./index.css";
import Product from './Products';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
   <>
    <Navbar></Navbar>
    <switch>
      <Route exact path = "/" component = {Home} />
      <Route exact path = "/Service" component = {Service} />
      <Route exact path = "/about" component = {About} />
      <Route exact path = "/contact" component = {Contact} />
      <Route exact path = "/Products" component = {Product} />
      <Redirect to="/"/>
    </switch>
   </>
    
  )
};

export default App;
