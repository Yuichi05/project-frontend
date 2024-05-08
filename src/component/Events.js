import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./Events.css";

const Events = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
  };

  return (
    <div>
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
                  <NavLink to={`/show/${product.id}`}>
                    <div className="card">
                      <div className="card-image">
                        <figure className="image is-1by1">
                          <img src={product.url} alt="Image" />
                        </figure>
                      </div>
                    </div>
                  </NavLink>
                  <div className="portfolio-caption">
                    <NavLink to={`/show/${product.id}`}>
                      <div className="portfolio-caption-heading">
                        {product.nama_event}
                      </div>
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
