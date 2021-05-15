import React from 'react';

const Footer = ()=>{
    return(
        <>
            
<footer className="text-light">
    <div className="container">
        <div className="row">
            <div className="col-md-3 col-lg-4 col-xl-3">
                <h5>About</h5>
                <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25"/>
                <p className="mb-0">
                    Grow your businees with Us. Have your website in a very low cost.
                </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3"></div>
            <div className="col-md-4 col-lg-3 col-xl-3">
                <h5>Contact</h5>
                <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25"/>
                <ul className="list-unstyled">
                    <li><i className="fa fa-home mr-2"></i> Kshitiz Sinha</li>
                    <li><i className="fa fa-envelope mr-2"></i> email@example.com</li>
                    <li><i className="fa fa-phone mr-2"></i> +91 **********</li>
                    <li><i className="fa fa-print mr-2"></i> +91 **********</li>
                </ul>
            </div>
            <div className="col-12 copyright mt-3">
                <p className="float-left">
                    <a href="#">Back to top</a>
                </p>
                <p className="text-right text-muted">created with <i className="fa fa-heart"></i> by <a href="#"><i>Kshitiz Sinha</i></a> | <span>v. 1.0</span></p>
            </div>
        </div>
    </div>
</footer>
        </>
    );
}

export default Footer;