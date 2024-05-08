import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Tiket = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="is-size-3 has-text-weight-bold is-uppercase has-text-centered mb-5 mt-5">
          Tiket
        </h1>
        <img
          className="bg-center mx-auto d-block image is-square"
          style={{ marginTop: 20, marginBottom: 20 }}
          width={650}
          src="https://png.pngtree.com/png-clipart/20210502/original/pngtree-special-event-ticket-design-template-png-image_6266539.jpg"
          alt="tiket"
        />
        <h1 className="is-size-4 has-text-weight-bold is-uppercase has-text-centered mb-5">
          Screenshot Tiketnya
        </h1>
      </div>
      <Footer />
    </div>
  );
};

export default Tiket;
