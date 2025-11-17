import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { About } from "./pages/about";
import { Login } from "./pages/login";
import { Products } from "./pages/products";
import { Navbar } from "./Components/Navbar";
import { ToastContainer } from "react-toastify";
import { ProductDetail } from "./pages/productDetail";
import { Student } from "./pages/student";
import { Addproducts, DeleteProducts } from "./pages/addproducts";
import { SellerHomepage } from "./pages/seller";
import Homepage from "./pages/homepage";

function App() {
  return (
    <>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route path="/" element={<LandingPage />}/>
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="products" element={<Products />} />
          <Route path="productsDetail/:id" element={<ProductDetail />} />
          <Route path="student/:rollno/:classroom" element={<Student />} />
        </Route>

        {/* nested  Routing*/}
        <Route path="/seller" element={<SellerHomepage />}>
          <Route path="addProducts" element={<Addproducts />} />
          <Route path="deleteProduct" element={<DeleteProducts />} />
        </Route>
        <Route path="*" element={<h1>Page not found 404</h1>} />
      </Routes>
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
