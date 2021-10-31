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
import Footer from './component/Footer/Footer';
import MyOrder from './component/MyOrder/MyOrder';


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
                <PrivateRoute path='/services/:serviceid'>
                  <ServiceDetails></ServiceDetails>
                </PrivateRoute> 
                <Route path='/services'>
                  <Services></Services>
                </Route> 
                <PrivateRoute path='/myorders'>
                  <MyOrder></MyOrder>
                </PrivateRoute>               
                <PrivateRoute path='/addservice'>
                  <AddService></AddService>
                </PrivateRoute>

                <PrivateRoute path='/manageservices'>
                  <ManageServices></ManageServices>
                </PrivateRoute>
                <PrivateRoute path='/manageorders'>
                  <ManageOrders></ManageOrders>
                </PrivateRoute>                        
                
                <PrivateRoute path='/nineee'>
                </PrivateRoute>

                <Route path=''>
                </Route>
                <Route path='*'>
                  <Notfound></Notfound>
                </Route>
                
              </Switch>
              <Footer></Footer>
            </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
