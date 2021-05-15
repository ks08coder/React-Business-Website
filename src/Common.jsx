import React from "react";
import img1 from "./img/img1.jpg";
import { NavLink } from "react-router-dom";
import "./index.css";


const Common = (props) => {
  return (
    <>
      <section id="Header" className="d-flex align-items-center pt-5">
        <div className="container-fluid nav_bg pt-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                <h1>
                  {props.title}<strong className="brandname"> Kshitiz Sinha</strong>
                </h1>
                <h5 className="my-3">
                  {props.aboutline}
                </h5>
                <div className="mt-3">
                  <NavLink to={props.linkv} className="btn btn-primary mb-2 btnget">
                    {props.btntitle}
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={props.imgsrc} alt="Img" className="img-fluid animated" />
                </div></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
