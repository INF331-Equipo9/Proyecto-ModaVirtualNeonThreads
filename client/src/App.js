
import "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <>
      <Navbar/>
      <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Product" element={<ProductDetail />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/AddProduct" element={<AddProduct />} />
        </Routes>
      </div>
    </>
  );
}

export default App;