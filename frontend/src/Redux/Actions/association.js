import axios from 'axios';
import { SetAlert } from './alert';
import {
    ADD_ASSOC,GET_ASSOCS,GET_ASSOC,EDIT_ASSOC,DELETE_ASSOC,ERROR_ASSOC
} from '../Constants/associationConst';

export const addAssoc = (nom,description,owner,nbdepersonne,objective) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    try {
      const res = await axios.post(
        `/Association/add`,
        {nom,description,owner,nbdepersonne,objective},
        config
      );
  
      dispatch({
        type: ADD_ASSOC,
        payload: res.data,
      });
      dispatch(SetAlert('Association Added', 'success'));
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach((error) => dispatch(SetAlert(error.msg, 'danger')));
        }
      dispatch({
        type: ERROR_ASSOC
    });
    }
  };

  export const getAssoc = (id) => async (dispatch) => {

    try {
      const res = await axios.get(
        `/Association/${id}`,
      );
      dispatch({
        type: GET_ASSOC,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ERROR_ASSOC,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

  
  export const getAssocs = () => async (dispatch) => {

    try {
      const res = await axios.get(`/Association/retrieveallassociation/`,
      );
      dispatch({
        type: GET_ASSOCS,
        payload: res.data,
      });

    } catch (err) {
      dispatch({
        type: ERROR_ASSOC,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };


  export const deleteAssoc = (id) => async (dispatch) => {
    try {
    await axios.delete(`/Association/remove-association/${id}`);
  
      dispatch({
        type: DELETE_ASSOC,
        payload: id,
      });
      dispatch(SetAlert('Client Removed', 'success'));
      } catch (err) {
      dispatch({
        type: ERROR_ASSOC,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
  export const editAssoc = (id,nom,description,owner,nbdepersonne,objective) => async (dispatch) => {
    try {
   await axios.put(`/Association/modifyassociation/`, {id,nom,description,owner,nbdepersonne,objective});
      dispatch({
        type: EDIT_ASSOC,
      });
      dispatch(SetAlert('Client Edited', 'success'));
      } catch (err) {
      dispatch({
        type: ERROR_ASSOC,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };