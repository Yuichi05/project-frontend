import { NavLink } from "react-router-dom";
import Hero from "../component/Hero";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../component/Events.css";

const LPAwal = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
  };
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-dark" id="mainNav">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img
                src="assets/img/vent.png"
                alt="..."
                style={{ width: "100px", height: "50px" }}
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i className="fas fa-bars ms-1" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="text-light mx-3"
                    to={"/login"}
                    style={{ textDecoration: "none" }}
                  >
                    Login
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Hero />
        <section className="page-section bg-light" id="portfolio">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Events</h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
            <div className="row">
              {products.map((product) => (
                <div className="col-lg-4 col-sm-6 mb-4" key={product.id}>
                  <div className="portfolio-item">
                    <div className="card">
                      <div className="card-image">
                        <figure className="image is-1by1">
                          <img src={product.url} alt="Image" />
                        </figure>
                      </div>
                    </div>
                    <div className="portfolio-caption">
                      <div className="portfolio-caption-heading">
                        {product.nama_event}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LPAwal;
