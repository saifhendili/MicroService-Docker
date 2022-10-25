import axios from 'axios';
import { SetAlert } from './alert';
import {
    ADD_ENTRETIEN,GET_ENTRETIEN,GET_ENTRETIENS,EDIT_ENTRETIEN,DELETE_ENTRETIEN,ERROR_ENTRETIEN
} from '../Constants/Entretienconst';

export const addEntretien = (tarif,description,duree,idEvent) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    try {
      const res = await axios.post(
        `/entretien/add`,
        {tarif,description,duree,idEvent},
        config
      );
  
      dispatch({
        type: ADD_ENTRETIEN,
        payload: res.data,
      });
      dispatch(SetAlert('Entretien Added', 'success'));
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach((error) => dispatch(SetAlert(error.msg, 'danger')));
        }
      dispatch({
        type: ERROR_ENTRETIEN 
    });
    }
  };

  export const getEntretien = (id) => async (dispatch) => {

    try {
      const res = await axios.get(
        `/entretien/${id}`,
      );
      dispatch({
        type: GET_ENTRETIEN,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ERROR_ENTRETIEN,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

  
  export const getEntretiens = () => async (dispatch) => {

    try {
      const res = await axios.get(`/entretien/retrieveall/`,
      );
      dispatch({
        type: GET_ENTRETIENS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ERROR_ENTRETIEN,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };


  export const deleteEntretien = (id) => async (dispatch) => {
    try {
    await axios.delete(`/entretien/remove/${id}`);
  
      dispatch({
        type: DELETE_ENTRETIEN,
        payload: id,
      });
      dispatch(SetAlert('Entretien Removed', 'success'));
      } catch (err) {
      dispatch({
        type: ERROR_ENTRETIEN,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
  export const editEntretien = (idEntretien,tarif,description,duree,idEvent) => async (dispatch) => {
    try {
   await axios.put(`/entretien/update/`, {idEntretien,tarif,description,duree,idEvent},);
  
      dispatch({
        type: EDIT_ENTRETIEN,
      });
      dispatch(SetAlert('Entretien Edited', 'success'));
      } catch (err) {
      dispatch({
        type: ERROR_ENTRETIEN,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };