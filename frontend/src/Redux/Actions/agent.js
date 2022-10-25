import axios from 'axios';
import { SetAlert } from './alert';
import {
    ADD_AGENT,GET_AGENT,GET_AGENTS,EDIT_AGENT,DELETE_AGENT,ERROR_AGENT
} from '../Constants/Agentconst';

export const addAgent = (Fullname,Adresse,Tel,Fax,mf) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    try {
      const res = await axios.post(
        `/api/agent/`,
        {Fullname,Adresse,Tel,Fax,mf},
        config
      );
  
      dispatch({
        type: ADD_AGENT,
        payload: res.data,
      });
      dispatch(SetAlert('Agent Added', 'success'));
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach((error) => dispatch(SetAlert(error.msg, 'danger')));
        }
      dispatch({
        type: ERROR_AGENT 
    });
    }
  };

  export const getAgent = (id) => async (dispatch) => {

    try {
      const res = await axios.get(
        `/api/agent/${id}`,
      );
      dispatch({
        type: GET_AGENT,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ERROR_AGENT,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

  
  export const getAgents = () => async (dispatch) => {

    try {
      const res = await axios.get(`/api/agent/`,
      );
      dispatch({
        type: GET_AGENTS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ERROR_AGENT,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };


  export const deleteAgent= (id) => async (dispatch) => {
    try {
    await axios.delete(`/api/agent/${id}`);
  
      dispatch({
        type: DELETE_AGENT,
        payload: id,
      });
      dispatch(SetAlert('Agent Removed', 'success'));
      } catch (err) {
      dispatch({
        type: ERROR_AGENT,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
  export const editAgent = (id,Fullname,Adresse,Tel,Fax,mf) => async (dispatch) => {
    try {
   await axios.put(`/api/agent/${id}`, {Fullname,Adresse,Tel,Fax,mf},);
  
      dispatch({
        type: EDIT_AGENT,
      });
      dispatch(SetAlert('Agent Edited', 'success'));
      } catch (err) {
      dispatch({
        type: ERROR_AGENT,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };