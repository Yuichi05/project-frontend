import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./events/ProductList";
import AddProduct from "./events/AddProduct";
import EditProduct from "./events/EditProduct";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Teams from "./component/Team";
import EventTable from "./table/EventTable";
import DetailEvent from "./pages/DetailEvent";
import Tiket from "./pages/Tiket";
import LPAwal from "./pages/LPAwal";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LPAwal />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/team" element={<Teams />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="add" element={<AddProduct />} />
        <Route path="edit/:id" element={<EditProduct />} />
        <Route path="/table-event" element={<EventTable />} />
        <Route path="/show/:id" element={<DetailEvent />} />
        <Route path="/tiket" element={<Tiket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
