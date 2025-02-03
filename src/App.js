import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import ProductDetails from "./pages/ProductDetails";
import Draggable from "react-draggable";
import * as motion from "motion/react-client";
import Checkout from "./pages/Checkout";
import SignLayout from "./components/SignComponent/SignLayout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgetPassword from "./pages/ForgetPassword";
import ShoppingCart from "./pages/ShoppingCart";
import SignInLayout from "./Layout/SignInLayout";
import CategoryProducts from "./pages/CategoryProducts";
import HeaLayout from "./Layout/HeaLayout";
import FirstPageLayout from "./Layout/FirstPageLayout";
import { path } from "./globalesvar";
import { useContext } from "react";
import ThemeContext from ".";
import Test from "./pages/Test";
export default function App() {
  return (
    // Routes
    <Router>
      <Routes>
        {/* Test */}
        <Route path="test" element={<Test />} />
        {/* //Principale pages */}
        <Route path="" element={<FirstPageLayout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="shoppingcart" element={<ShoppingCart />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
        {/* Hearchical pages */}
        <Route path="home" element={<HeaLayout />}>
          <Route
            path="category-products/:categoryid"
            element={<CategoryProducts />}
          />
          <Route
            path="details-product/:productid"
            element={<ProductDetails />}
          />
          <Route
            path="category-products/:categoryid/details-product/:productid"
            element={<ProductDetails />}
          />
          <Route path="*" element={<NoPage />} />
        </Route>
        {/* Others */}
        <Route path="sign" element={<SignLayout />}>
          <Route path="in" element={<SignInLayout />}>
            <Route path="enter" element={<SignIn />} />
            <Route path="pwd-recovery" element={<ForgetPassword />} />
          </Route>
          <Route path="up" element={<SignUp />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}
