import React from "react";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import { useSelector, useDispatch } from "react-redux";
import SignInPage from "./pages/SignInPage";
import PaymentPage from "./pages/PaymentPage";
import { signOut } from "./redux/actions/userActions";
import RegisterPage from "./pages/RegisterPage";
import ShippingAddressPage from "./pages/ShippingAddressPage";
import PlaceOrderPage from "./pages/PlaceOrderPage";
import OrderScreenPage from "./pages/OrderScreenPage";
import OrderHistoryScreenPage from "./pages/OrderHistoryScreenPage";
import ProfileScreenPage from "./pages/ProfileScreenPage";
import ProductListScreen from "./pages/ProductListScreen";
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoute";

const App = () => {
  const cart = useSelector((state) => state.cart);
  const userSignIn = useSelector((state) => state.userSignIn);
  const { cartItems } = cart;
  const { userInfo } = userSignIn;
  const dispatch = useDispatch();

  const signOutHandler = () => {
    dispatch(signOut());
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link to="/" className="brand">
              Amazona
            </Link>
          </div>
          <div>
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{" "}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/profile">User Profile</Link>
                  </li>
                  <li>
                    <Link to="/orderhistory"> Order History</Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signOutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/signin" component={SignInPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route path="/shipping" component={ShippingAddressPage} />
            <Route path="/payment" component={PaymentPage} />
            <Route path="/product/:id" component={ProductPage} exact></Route>
            <Route path="/cart/:id?" component={CartPage} />
            <Route path="/placeorder" component={PlaceOrderPage} />
            <Route path="/order/:id" component={OrderScreenPage} />
            <Route path="/orderhistory" component={OrderHistoryScreenPage} />
            <PrivateRoute
              path="/profile"
              component={ProfileScreenPage}
            ></PrivateRoute>
            <AdminRoute
              path="/productlist"
              component={ProductListScreen}
            ></AdminRoute>
          </Switch>
        </main>
        <footer className="row center">All rights reserved</footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
