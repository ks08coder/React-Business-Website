import React from 'react';
import { NavLink } from "react-router-dom";
import "./index.css";

const Error = ()=> {
  return (
    <>
         <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">404 <br /> PaGe nOt FoUnD!</h1>
          <p className="lead text-muted">Oops! Something went wrong. please check any typo-error in the link. You typed "<a href={window.location.href}>{window.location.href}</a>". If you forgot the path. Please Go to <a href="/Paths">Paths Page</a> or choose one of the following.</p>
          <p>
            <NavLink to="/" className="btn btn-primary my-2">Go to the Homepage</NavLink>   
            <NavLink to="/contact" className="btn btn-secondary my-2 kml-2">Contact Us </NavLink>
          </p>
        </div>
      </section>
    </>
  );
}

export default Error;
