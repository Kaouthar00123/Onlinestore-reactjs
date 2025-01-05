import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Test from "./Test/Test";
import ProductDetails from "./pages/ProductDetails";
import Draggable from "react-draggable";
import * as motion from "motion/react-client";
import Checkout from "./pages/Checkout";
import FirstPageLayout from "./Layout/FirstPageLayout";
import SignLayout from "./components/SignComponent/SignLayout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgetPassword from "./pages/ForgetPassword";
import ShoppingCart from "./pages/ShoppingCart";

export default function App() {
  return (
    // Routes
    <Routes>
      <Route path="firstpages" element={<FirstPageLayout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="productdetails/:productid" element={<ProductDetails />} />
        <Route path="shoppingcart" element={<ShoppingCart />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
      <Route path="sign" element={<SignLayout />}>
        <Route path="in" element={<SignIn />} />
        <Route path="up" element={<SignUp />} />
        <Route path="pwd-recovery" element={<ForgetPassword />} />
        <Route path="*" element={<NoPage />} />
      </Route>
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}
