import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4">
        <div className="card mb-4 box-shadow">
          <img className="card-img-top" src={props.imgsrc} alt={props.imgsrc} />
          <div className="card-body">
            <p className="card-text">{props.about}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <a
                  href={props.links}
                  className="btn btn-sm btn-outline-secondary"
                >
                  {props.linkname}
                </a>
              </div>
              <small className="text-muted">{props.datetimew}</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
