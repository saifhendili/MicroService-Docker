import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../Redux/Actions/auth';
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSignOutAlt, faUser, faCog } from '@fortawesome/free-solid-svg-icons';
function Navbar( ) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { isAuthenticated, loading, user } =auth ;

  const loggout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  const authLinks = (
    <Fragment>
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">Features</a>
      <a class="nav-item nav-link" href="#">Pricing</a>
      <a onClick={(e) => loggout(e)} href='#!' class="nav-item nav-link">
      Logout
          </a>    </div>
  </div>
</nav>
   </Fragment>
  );

  const guestLinks = (
    <Fragment>
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <Link to="login" class="nav-item nav-link active" >Login <span class="sr-only">(current)</span></Link>
      <Link to="register" class="nav-item nav-link active" >Register <span class="sr-only">(current)</span></Link>
   </div>
  </div>
</nav>
   </Fragment>
  );

  const adminLinks = (
    <div className='navbarlogin navbaradmin'>
      <ul className='listnavbar'>
        <li>
          <Link to='Dashboard' className='linknav'>
            <FontAwesomeIcon icon={faCog} />
            DashboardAdmin
          </Link>

          <div id='indicator'></div>
        </li>
        <li>
          <a onClick={(e) => loggout(e)} href='#!' className='linknav'>
            <FontAwesomeIcon className='faSignOutAlt' icon={faSignOutAlt} />
            <span className='logout'>Logout</span>
          </a>
          <div id='indicator'></div>
        </li>
      </ul>
    </div>
  );

  return (
    <div>
      {/* <Link to='/'>logo</Link> */}

      <Fragment>
        {loading
          ? null
          : isAuthenticated && user !== null
          ? authLinks
          : guestLinks}
      </Fragment>

    </div>
  );
}

export default Navbar