import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './component/Home/Home';
import Notfound from './component/Notfound/Notfound';
import Header from './component/Header/Header';
import AuthProvider from './context/AuthContext';
import Login from './component/Login/Login';
import Services from './component/Services/Services';
import PrivateRoute from './component/Login/PrivateRoute/PrivateRoute';
import AddService from './component/AddService/AddService';
import ServiceDetails from './component/ServiceDetails/ServiceDetails';
import ManageServices from './component/ManageServices/ManageServices';
import ManageOrders from './component/ManageOrders/ManageOrders';


function App() {
  return (
    <div className="App">
      <AuthProvider>
            <Router>
              <Header></Header>
              <Switch>
                <Route exact path='/'>
                  <Home></Home>
                </Route>
                <Route path='/home'>
                  <Home></Home>
                </Route>
                <Route path='/login'>
                  <Login></Login>
                </Route>
                <Route path='/services/:serviceid'>
                  <ServiceDetails></ServiceDetails>
                </Route> 
                <Route path='/services'>
                  <Services></Services>
                </Route>                
                <Route path='/addservice'>
                  <AddService></AddService>
                </Route>

                <Route path='/manageservices'>
                  <ManageServices></ManageServices>
                </Route>
                <Route path='/manageorders'>
                  <ManageOrders></ManageOrders>
                </Route>
                         
                
                <PrivateRoute path='/nineee'>
                </PrivateRoute>

                <Route path=''>

                </Route>
                <Route path='*'>
                  <Notfound></Notfound>
                </Route>
              </Switch>
            </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
