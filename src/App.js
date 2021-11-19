import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import LogIn from "./pages/Home/Home/LogIn/LogIn";
import Register from "./pages/Home/Home/LogIn/Register/Register";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Booking from "./pages/Booking/Booking";
import Deshboard from "./pages/Deshboard/Deshboard/Deshboard";
import ExploreProducts from "./pages/ExploreProducts/ExploreProducts";
import PrivateRoute from "./pages/Home/Home/LogIn/PrivatrRoute/PrivateRoute";
import NotFound from "./pages/NotFound.js/NotFound";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>

            <Route path="/explore">
              <ExploreProducts />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <PrivateRoute path="/deshboard">
              <Deshboard />
            </PrivateRoute>
            <PrivateRoute path="/booking/:cardId">
              <Booking />
            </PrivateRoute>
            <Route path="/login">
              <LogIn />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
