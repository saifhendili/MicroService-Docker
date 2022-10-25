import axios from 'axios';
import { SetAlert } from './alert';
import {
    ADD_FOURNISSEUR,GET_FOURNISSEUR,GET_FOURNISSEURS,EDIT_FOURNISSEUR,DELETE_FOURNISSEUR,ERROR_FOURNISSEUR
} from '../Constants/Fournisseurconst';

export const addFournisseur = (Fullname,Adresse,Tel,Fax,mf) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    try {
      const res = await axios.post(
        `/api/Fournisseur/`,
        {Fullname,Adresse,Tel,Fax,mf},
        config
      );
  
      dispatch({
        type: ADD_FOURNISSEUR,
        payload: res.data,
      });
      dispatch(SetAlert('Fournisseur Added', 'success'));
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach((error) => dispatch(SetAlert(error.msg, 'danger')));
        }
      dispatch({
        type: ERROR_FOURNISSEUR 
    });
    }
  };

  export const getFournisseur = (id) => async (dispatch) => {

    try {
      const res = await axios.get(
        `/api/Fournisseur/${id}`,
      );
      dispatch({
        type: GET_FOURNISSEUR,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ERROR_FOURNISSEUR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

  
  export const getFournisseurs = () => async (dispatch) => {

    try {
      const res = await axios.get(`/api/Fournisseur/`,
      );
      dispatch({
        type: GET_FOURNISSEURS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ERROR_FOURNISSEUR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };


  export const deleteFournisseur = (id) => async (dispatch) => {
    try {
    await axios.delete(`/api/Fournisseur/${id}`);
  
      dispatch({
        type: DELETE_FOURNISSEUR,
        payload: id,
      });
      dispatch(SetAlert('Fournisseur Removed', 'success'));
      } catch (err) {
      dispatch({
        type: ERROR_FOURNISSEUR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
  export const editFournisseur = (id,Fullname,Adresse,Tel,Fax,mf) => async (dispatch) => {
    try {
   await axios.put(`/api/Fournisseur/${id}`, {Fullname,Adresse,Tel,Fax,mf},);
  
      dispatch({
        type: EDIT_FOURNISSEUR,
      });
      dispatch(SetAlert('Fournisseur Edited', 'success'));
      } catch (err) {
      dispatch({
        type: ERROR_FOURNISSEUR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };