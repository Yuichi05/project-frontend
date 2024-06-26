import React from "react";
import Nav from "./Navbar";
import  Foot  from "./Footer";

const Team = () => {
  return (
    <div>
      <Nav/>
      {/* Team*/}
      <section className="page-section bg-light" id="team">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="team-member">
                <img
                  className="mx-auto rounded-circle"
                  src="assets/img/team/1.jpg"
                  alt="..."
                />
                <h4>Parveen Anand</h4>
                <p className="text-muted">Lead Designer</p>
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="Parveen Anand instagram Profile"
                >
                  <i className="fab fa-instagram" />
                </a>
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="Parveen Anand Facebook Profile"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="Parveen Anand LinkedIn Profile"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-member">
                <img
                  className="mx-auto rounded-circle"
                  src="assets/img/team/2.jpg"
                  alt="..."
                />
                <h4>Diana Petersen</h4>
                <p className="text-muted">Lead Marketer</p>
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="Diana Petersen instagram Profile"
                >
                  <i className="fab fa-instagram" />
                </a>
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="Diana Petersen Facebook Profile"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="Diana Petersen LinkedIn Profile"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-member">
                <img
                  className="mx-auto rounded-circle"
                  src="assets/img/team/3.jpg"
                  alt="..."
                />
                <h4>Larry Parker</h4>
                <p className="text-muted">Lead Developer</p>
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="Larry Parker instagram Profile"
                >
                  <i className="fab fa-instagram" />
                </a>
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="Larry Parker Facebook Profile"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="Larry Parker LinkedIn Profile"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="large text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                eaque, laboriosam veritatis, quos non quis ad perspiciatis,
                totam corporis ea, alias ut unde.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Clients*/}
      <div className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3 col-sm-6 my-3">
              <a href="#!">
                <img
                  className="img-fluid img-brand d-block mx-auto"
                  src="assets/img/logos/microsoft.svg"
                  alt="..."
                  aria-label="Microsoft Logo"
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-6 my-3">
              <a href="#!">
                <img
                  className="img-fluid img-brand d-block mx-auto"
                  src="assets/img/logos/google.svg"
                  alt="..."
                  aria-label="Google Logo"
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-6 my-3">
              <a href="#!">
                <img
                  className="img-fluid img-brand d-block mx-auto"
                  src="assets/img/logos/facebook.svg"
                  alt="..."
                  aria-label="Facebook Logo"
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-6 my-3">
              <a href="#!">
                <img
                  className="img-fluid img-brand d-block mx-auto"
                  src="assets/img/logos/ibm.svg"
                  alt="..."
                  aria-label="IBM Logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Foot/>
    </div>
  );
};

export default Team;
