import axios from 'axios';
import { SetAlert } from './alert';
import {
    ADD_FACTURE,ERROR_FACTURE,ADD_PRODUCT, GET_FACTURE
} from '../Constants/Factureconst';

export const addFacture = (idfolder,NomSte,adresse,tel,mf,routing,Colis,poid,volume,HBL,Destinataire) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post(
        `/api/facture/${idfolder}`,
        {NomSte,adresse,tel,mf,routing,Colis,poid,volume,HBL,Destinataire},
        config
      );
  
      dispatch({
        type: ADD_FACTURE,
        payload: res.data,
      });
      dispatch(SetAlert('Facture Added', 'success'));
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach((error) => dispatch(SetAlert(error.msg, 'danger')));
        }
      dispatch({
        type: ERROR_FACTURE 
    });
    }
  };

  export const addProduct = (idfacture,Description,unites,CoutUnitaire) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post(
        `/api/facture/product/${idfacture}`,
        {Description,unites,CoutUnitaire},
        config
      );
  
      dispatch({
        type: ADD_PRODUCT,
        payload: res.data,
      });
      dispatch(SetAlert('Product Added', 'success'));
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach((error) => dispatch(SetAlert(error.msg, 'danger')));
        }
      dispatch({
        type: ERROR_FACTURE 
    });
    }
  };
  export const getFacture= (id) => async (dispatch) => {

    try {
      const res = await axios.get(
        `/api/facture/${id}`,
      );
      dispatch({
        type: GET_FACTURE,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ERROR_FACTURE,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };