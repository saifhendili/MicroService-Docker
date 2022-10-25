import React,{Fragment} from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

function Aside() {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const { isAuthenticated, loading, user } =auth ;
  
  const AsideMenu = (
    <div id="layout-sidenav" class="layout-sidenav sidenav sidenav-vertical bg-white logo-dark">
    <div class=" demo">
        <span class="app-brand-logo demo">
           {/* <img src="assets/Logo-removebg-preview.png" alt="Brand Logo" class="img-fluid fixlogo"/>  */}
        </span>
        
    </div>
    <div class="sidenav-divider mt-0"></div>

    <ul class="sidenav-inner py-1">

        <li class="sidenav-item active">
        <Link to="dashboard">
            <a class="sidenav-link">
                <i class="sidenav-icon feather icon-home"></i>
                <div>Dashboards</div>
                <div class="pl-1 ml-auto">
                    <div class="badge badge-danger">Hot</div>
                </div>
            </a>
            </Link>
        </li>
       
        <li class="sidenav-divider mb-1"></li>
        <li class="sidenav-header small font-weight-semibold">Admin</li>
        <Link to="Blogs"><li class="sidenav-item">
            <a  class="sidenav-link">
            <i class="sidenav-icon feather icon-user"></i>
                <div>Blog</div>
            </a>
        </li>
        </Link>
        <Link to="AddBlog"><li class="sidenav-item">
            <a  class="sidenav-link">
            <i class="sidenav-icon feather icon-user"></i>
                <div>Ajouter blog</div>
            </a>
        </li>
        </Link>
   

        <li class="sidenav-divider mb-1"></li>
        <li class="sidenav-header small font-weight-semibold">Entretien</li>
        <Link to="ListEntretien"><li class="sidenav-item">
            <a  class="sidenav-link">
            <i class="sidenav-icon feather icon-user"></i>
                <div>Liste Entretien</div>
            </a>
        </li>
        </Link>
        <Link to="AddEntretien"><li class="sidenav-item">
            <a  class="sidenav-link">
            <i class="sidenav-icon feather icon-user"></i>
                <div>Ajouter Entretien</div>
            </a>
        </li>
        </Link>

        <li class="sidenav-divider mb-1"></li>
        <li class="sidenav-header small font-weight-semibold">Event</li>
        <Link to="ListEvent"><li class="sidenav-item">
            <a  class="sidenav-link">
            <i class="sidenav-icon feather icon-user"></i>
                <div>Liste Event</div>
            </a>
        </li>
        </Link>
        <Link to="AddEvent"><li class="sidenav-item">
            <a  class="sidenav-link">
            <i class="sidenav-icon feather icon-user"></i>
                <div>Ajouter Event</div>
            </a>
        </li>
        </Link>

        <li class="sidenav-divider mb-1"></li>
        <li class="sidenav-header small font-weight-semibold">Books</li>
   <Link to="AddAssociation">
        <li class="sidenav-item">
            <a class="sidenav-link">
            <i class="sidenav-icon lnr lnr-book "></i>
                <div> Ajouter Association</div>
            </a>
        </li>
        </Link>
        <Link to="ListAssociation">
        <li class="sidenav-item">
            <a class="sidenav-link">
            <i class="sidenav-icon lnr lnr-book "></i>
                <div> Liste Association</div>
            </a>
        </li>
        </Link>
        
       
    </ul>
</div>

  );

  return (
    <Fragment >

        {loading
          ? null
          : isAuthenticated && user!==null
          ? AsideMenu
          : null}
    </Fragment>  )
}


export default Aside;
