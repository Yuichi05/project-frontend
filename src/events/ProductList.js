import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/products/${productId}`);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="columns is-multiline mt-2">
          {products.map((product) => (
            <div className="column is-one-quarter" key={product.id}>
              <NavLink to={`/show/${product.id}`}>
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-1by1">
                      <img src={product.url} alt="Image" />
                    </figure>
                  </div>
                </div>
              </NavLink>
              <NavLink to={`/show/${product.id}`}>
                <h1 className="is-size-4 has-text-weight-bold has-text-centered mt-3">
                  {product.nama_event}
                </h1>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductList;
