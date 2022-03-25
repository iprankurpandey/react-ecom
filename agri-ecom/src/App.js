import CartManagerItems from "page/CartManager/CartManagerItems";
import HomePage from "page/HomePage/HomePage";
import LoginPage from "page/Login/LoginPage";
import ProductCards from "page/ProductListing/ProductCards";
import SignupPage from "page/Signup/SignupPage";

function App() {
  return (
    <div>
      <HomePage />
      <ProductCards />
      <LoginPage />
      <SignupPage />
      <CartManagerItems />
    </div>
  );
}

export default App;
