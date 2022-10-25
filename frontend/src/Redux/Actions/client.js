import axios from 'axios';
import { SetAlert } from './alert';
import {
    ADD_CLIENT,GET_CLIENT,GET_CLIENTS,EDIT_CLIENT,DELETE_CLIENT,ERROR_CLIENT
} from '../Constants/Clientconst';

export const addClient = (Fullname,Adresse,Tel,Fax,mf) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    try {
      const res = await axios.post(
        `/api/client/`,
        {Fullname,Adresse,Tel,Fax,mf},
        config
      );
  
      dispatch({
        type: ADD_CLIENT,
        payload: res.data,
      });
      dispatch(SetAlert('Client Added', 'success'));
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach((error) => dispatch(SetAlert(error.msg, 'danger')));
        }
      dispatch({
        type: ERROR_CLIENT 
    });
    }
  };

  export const getClient = (id) => async (dispatch) => {

    try {
      const res = await axios.get(
        `/api/client/${id}`,
      );
      dispatch({
        type: GET_CLIENT,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ERROR_CLIENT,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

  
  export const getClients = () => async (dispatch) => {

    try {
      const res = await axios.get(`/api/client/`,
      );
      dispatch({
        type: GET_CLIENTS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ERROR_CLIENT,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };


  export const deleteClient = (id) => async (dispatch) => {
    try {
    await axios.delete(`/api/client/${id}`);
  
      dispatch({
        type: DELETE_CLIENT,
        payload: id,
      });
      dispatch(SetAlert('Client Removed', 'success'));
      } catch (err) {
      dispatch({
        type: ERROR_CLIENT,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
  export const editClient = (id,Fullname,Adresse,Tel,Fax,mf) => async (dispatch) => {
    try {
   await axios.put(`/api/client/${id}`, {Fullname,Adresse,Tel,Fax,mf},);
  
      dispatch({
        type: EDIT_CLIENT,
      });
      dispatch(SetAlert('Client Edited', 'success'));
      } catch (err) {
      dispatch({
        type: ERROR_CLIENT,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };