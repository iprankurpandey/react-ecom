import CartManagerItems from "page/CartManager/CartManagerItems";
import HomePage from "page/HomePage/HomePage";
import LoginPage from "page/Login/LoginPage";
import ProductCards from "page/ProductListing/ProductCards";
import SignupPage from "page/Signup/SignupPage";
import { Link, Route } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Route>
        <Link to="/">Home</Link>
        <Link to="/ProductCards">ProductCards</Link>
        <Link to="/LoginPage">Login</Link>
        <Link to="/SignupPage">Signup</Link>
      </Route> */}

      {/* <SignupPage /> */}
      <LoginPage />
      {/* <CartManagerItems /> */}
    </div>
  );
}

export default App;
