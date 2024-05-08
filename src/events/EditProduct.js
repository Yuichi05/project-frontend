import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const EditProduct = () => {
  const [title, setTitle] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async () => {
    const response = await axios.get(`http://localhost:5000/products/${id}`);
    setTitle(response.data.nama_event);
    setTanggal(response.data.tanggal);
    setLokasi(response.data.lokasi);
    setFile(response.data.image);
    setPreview(response.data.url);
  };

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("tanggal", tanggal);
    formData.append("lokasi", lokasi);
    try {
      await axios.patch(`http://localhost:5000/products/${id}`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate("/table-event");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="columns is-centered mt-5">
        <div className="column is-half">
          <form onSubmit={updateProduct}>
            <div className="field">
              <label className="label">Event Name</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Input Event Name"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Event Date</label>
              <div className="control">
                <input
                  type="date"
                  className="input"
                  value={tanggal}
                  onChange={(e) => setTanggal(e.target.value)}
                  placeholder="Input Event Date"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Event Location</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={lokasi}
                  onChange={(e) => setLokasi(e.target.value)}
                  placeholder="Input Event Location"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Image</label>
              <div className="control">
                <div className="file">
                  <label className="file-label">
                    <input
                      type="file"
                      className="file-input"
                      onChange={loadImage}
                    />
                    <span className="file-cta">
                      <span className="file-label">Choose a file...</span>
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {preview ? (
              <figure className="image is-128x128">
                <img src={preview} alt="Preview Image" />
              </figure>
            ) : (
              ""
            )}

            <div className="field">
              <div className="control">
                <button type="submit" className="button is-success">
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditProduct;
