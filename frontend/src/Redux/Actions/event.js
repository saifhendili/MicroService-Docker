import axios from 'axios';
import { SetAlert } from './alert';
import {
    ADD_EVENT,GET_EVENT,GET_EVENTS,EDIT_EVENT,DELETE_EVENT,ERROR_EVENT
} from '../Constants/Eventconst';

export const addEvent = (nom,description,date,nbvelo,place) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    try {
      const res = await axios.post(
        `/event/add`,
        {nom,description,date,nbvelo,place},
        config
      );
  
      dispatch({
        type: ADD_EVENT,
        payload: res.data,
      });
      dispatch(SetAlert('Event Added', 'success'));
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach((error) => dispatch(SetAlert(error.msg, 'danger')));
        }
      dispatch({
        type: ERROR_EVENT 
    });
    }
  };

  export const getEvent = (id) => async (dispatch) => {

    try {
      const res = await axios.get(
        `/event/getbyidevent/${id}`,
      );
      dispatch({
        type: GET_EVENT,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ERROR_EVENT,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

  
  export const getEvents = () => async (dispatch) => {

    try {
      const res = await axios.get(`/event/retrieveallevent/`,
      );
      dispatch({
        type: GET_EVENTS,
        payload: res.data,
      });

    } catch (err) {
      dispatch({
        type: ERROR_EVENT,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };


  export const deleteEvent = (id) => async (dispatch) => {
    try {
    await axios.delete(`/event/remove-event/${id}`);
  
      dispatch({
        type: DELETE_EVENT,
        payload: id,
      });
      dispatch(SetAlert('Client Removed', 'success'));
      } catch (err) {
      dispatch({
        type: ERROR_EVENT,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
  export const editEvent = (id,nom,description,date,nbvelo,place) => async (dispatch) => {
    try {
   await axios.put(`/event/modifierevent/`, {id,nom,description,date,nbvelo,place});
  
      dispatch({
        type: EDIT_EVENT,
      });
      dispatch(SetAlert('Client Edited', 'success'));
      } catch (err) {
      dispatch({
        type: ERROR_EVENT,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };