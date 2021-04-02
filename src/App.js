import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatched from './components/NoMatched/NoMatched';
import Home from './components/Home/Home';
import AddCar from './components/AddCar/AddCar';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { createContext, useState } from 'react';
import ManageProduct from './components/ManageProduct/ManageProduct';
import Orders from './components/Orders/Orders';

export const UserContext = createContext();

function App() {
  const [signedInUser, setSignedInUser] = useState({});
  return (
    <UserContext.Provider value={[signedInUser, setSignedInUser]}>
      <Router>
        <div>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/addProduct">
              <AddCar />
            </Route>
            <Route path="/manageProduct">
              <ManageProduct />
            </Route>
            <PrivateRoute path="/orders">
               <Orders/>
            </PrivateRoute>
            <PrivateRoute path="/car/:id">
              <Checkout />
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <AddCar />
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NoMatched />
            </Route>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
