import CartManagerItems from "page/CartManager/CartManagerItems";
// import HomePage from "page/HomePage/HomePage";
import LoginPage from "page/Login/LoginPage";
// import ProductCards from "page/ProductListing/ProductCards";
import SignupPage from "page/Signup/SignupPage";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {
//   Header,
//   Footer,
//   SideBarFilter,
//   ItemCards,
//   Login,
//   SignUp,
//   CartManager,
// } from "./components/PageComponents";

function App() {
  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/cartmanager" element={<CartManagerItems />} />
        <Route path="/productcards" element={<ProductCards />} />
      </Routes> */}

      {/* <HomePage /> */}
      {/* <ProductCards /> */}
      {/* <LoginPage /> */}
      {/* <SignupPage /> */}
      <CartManagerItems />
    </div>
  );
}

export default App;
