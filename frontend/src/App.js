import { Route, Routes }from "react-router-dom";
import React, { useEffect,Fragment } from 'react';
import './App.css';
import setAuthToken from './Redux/utils/setAuthToken';
import { loadUser } from './Redux/Actions/auth';
import store from './Redux/Store';
import PrivateRoute from "./components/routing/PrivateRoute";
import Aside from "./components/Layout/Aside";
import Alert from "./components/Layout/Alert";
import Navbar from "./components/Layout/Navbar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/dashborad/Dashboard";
import Blogs from "./components/Blog/Blogs";
import AddBlog from "./components/Blog/AddBlog";
import ListEntretien from "./components/Entretien/ListEntretien";
import AddEntretien from "./components/Entretien/AddEntretien";
import EditEntretien from "./components/Entretien/EditEntretien";
import ListEvent from "./components/Event/ListEvent";
import AddEvent from "./components/Event/AddEvent";
import EditEvent from "./components/Event/EditEvent";
import ListAssociation from "./components/association/ListAssociation";
import EditAssociation from "./components/association/EditAssociation";
import AddAssociation from "./components/association/AddAssociation";


if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <div class="layout-wrapper layout-2">
    <div class="layout-inner">
                <Aside/>
                <div class="layout-container">
          <Navbar/>
          <div class="layout-content">
          <Fragment>
      <Alert className='aaa' />
    <Routes>
<Route exact path='/register' element={<Register/>} />
<Route exact path='/login' element={<Login/>} />
<Route  path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>} />
<Route  path='/Blogs' element={<PrivateRoute><Blogs/></PrivateRoute>} />
<Route  path='/AddBlog' element={<PrivateRoute><AddBlog/></PrivateRoute>} />
<Route  path='/ListEntretien' element={<PrivateRoute><ListEntretien/></PrivateRoute>} />
<Route  path='/AddEntretien' element={<PrivateRoute><AddEntretien/></PrivateRoute>} />
<Route  path='/EditEntretien' element={<PrivateRoute><EditEntretien/></PrivateRoute>} />
<Route  path='/ListEvent' element={<PrivateRoute><ListEvent/></PrivateRoute>} />
<Route  path='/AddEvent' element={<PrivateRoute><AddEvent/></PrivateRoute>} />
<Route  path='/EditEvent' element={<PrivateRoute><EditEvent/></PrivateRoute>} />
<Route  path='/ListAssociation' element={<PrivateRoute><ListAssociation/></PrivateRoute>} />
<Route  path='/assosiationedit' element={<PrivateRoute><EditAssociation/></PrivateRoute>} />
<Route  path='/AddAssociation' element={<PrivateRoute><AddAssociation/></PrivateRoute>} />

</Routes>
</Fragment>
      </div>
        </div>
      </div>
      </div>
  );
}

export default App;
