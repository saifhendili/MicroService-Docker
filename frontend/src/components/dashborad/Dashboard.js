import React, { Fragment } from 'react'
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";


function Dashboard() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { isAuthenticated, loading, user } =auth ;

    return (
      user.typeuser=="isAdmin"?
   <h1>test</h1>:<h1>test</h1> 
    
    )
}

export default Dashboard