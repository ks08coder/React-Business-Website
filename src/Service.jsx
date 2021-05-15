import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";
import img1 from "./img/img1.jpg";

const Service = () => {
  return (
    <>
      <div className="my-5">
        <div className="text-center">
          <h2>Our Services</h2>
        </div>
      </div>
      <div class="album py-5 bg-light">
        <div className="container">
          <div className="row">
            {Sdata.map((val, ind) => {
              return (
                <Card
                  key={ind}
                  imgsrc={img1}
                  datetimew={val.datetimew}
                  about={val.about}
                  links={val.links}
                  linkname={val.linkname}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
