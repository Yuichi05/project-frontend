import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const DetailEvent = () => {
  const [product, setProduct] = useState(null); // Initialize with null instead of an empty array
  const { id } = useParams();

  useEffect(() => {
    getProductById(id); // Pass the id as an argument to the function
  }, [id]); // Add id as a dependency to re-run the effect when id changes

  const getProductById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/products/${id}`);
      setProduct(response.data); // Update the state with the fetched product
    } catch (error) {
      console.error(error); // Handle errors properly
    }
  };

  if (!product) {
    return <div>Loading...</div>; // Display a loading message while data is being fetched
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="project-description mt-5">
          <h1 className="is-size-3 has-text-weight-bold is-uppercase has-text-centered mb-5">
            {product.nama_event}
          </h1>
          <img
            src={product.url}
            alt=""
            className="image is-1by1 bg-center mx-auto d-block"
            width={550}
          />
          <div className="project-meta">
            <p className="mt-5 has-text-weight-semibold is-size-6 has-text-centered">
              Tanggal:{" "}
              <span>
                {new Date(product.tanggal).toLocaleDateString("id-ID", {
                  year: "numeric",
                  month: "long",
                  day: "2-digit",
                })}
              </span>
            </p>
            <p className="mb-0 has-text-weight-semibold is-size-6 has-text-centered">
              Lokasi: <span>{product.lokasi}</span>
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Link
              to={`/tiket`}
              className="ms-2 button is-primary my-5"
            >
              Beli Tiket
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailEvent;
