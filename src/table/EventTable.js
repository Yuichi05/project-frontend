import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Layout from "../component/Layout";

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
    <Layout>
      <div className="container mt-5">
        <div className="columns is-multiline mt-2">
          <Link to="/add" className="button is-primary mb-5">
            Tambah Data
          </Link>
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nama Event</th>
                <th scope="col">Tanggal</th>
                <th scope="col">Lokasi</th>
                <th scope="col">Image</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            {products.map((product, index) => (
              <tbody key={product.id}>
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{product.nama_event}</td>
                  <td>{product.tanggal}</td>
                  <td>{product.lokasi}</td>
                  <td>
                    <img src={product.url} alt="image" width={50} />
                  </td>
                  <td>
                    <Link
                      to={`/show/${product.id}`}
                      className="button is-info is-small"
                    >
                      Lihat
                    </Link>
                    <Link
                      to={`/edit/${product.id}`}
                      className="ms-2 button is-warning is-small"
                    >
                      Edit
                    </Link>
                    <a
                      onClick={() => deleteProduct(product.id)}
                      className="ms-2 button is-danger is-small"
                    >
                      Hapus
                    </a>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default ProductList;
