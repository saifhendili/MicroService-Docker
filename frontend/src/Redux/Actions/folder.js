import axios from 'axios';
import { SetAlert } from './alert';
import {
    ADD_FOLDER,ERROR_FOLDER,ADD_MARCHANDISE,ADD_TRANSPORTEUR,GET_FOLDER,GET_FOLDERS,ADD_AVIDDEPARDD,ADD_BONLIV,ADD_LTA,ADD_SOUSFOLDER,ADD_MARCHANDISE_SOUSD,ADD_PRODUCT_SOUSD,GET_SOUSDOSSIER,ADD_BONLIVSD,ADD_LTASD
} from '../Constants/FolderConst';




export const AddMarchandiseFolder = (idfolder,MarqueNum,nbColis,Marchedise,poids,Volume,dimension) => async (dispatch) => {
    const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
    try {
      const d=dimension.split('*')
      const res = await axios.post(
        `/api/folder/Marchenndise/${idfolder}`,
        {MarqueNum,nbColis,Marchedise,poids,Volume,poidstocable:(((d[0]/100)*(d[1]/100)*(d[2]/100)*1000*nbColis)/6),dimension},
        config
      );
  
      dispatch({
        type: ADD_MARCHANDISE,
        payload: res.data,
      });
  
      dispatch(SetAlert('Colis Added', 'success'));
    } catch (err) {
      dispatch({
        type: ERROR_FOLDER,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
  export const AddMarchandisesousDossier = (idfolder,idsousdossier,MarqueNum,nbColis,Marchedise,poids,Volume,dimension) => async (dispatch) => {
    const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
    try {
      const d=dimension.split('*')
      const res = await axios.post(
        `/api/folder/sous-dossier/Marchendises/${idfolder}/${idsousdossier}`,
        {MarqueNum,nbColis,Marchedise,poids,Volume,poidstocable:(((d[0]/100)*(d[1]/100)*(d[2]/100)*1000*nbColis)/6),dimension},
        config
      );
  
      dispatch({
        type: ADD_MARCHANDISE_SOUSD,
        payload: res.data,
      });
  
      dispatch(SetAlert('Colis Added', 'success'));
    } catch (err) {
      dispatch({
        type: ERROR_FOLDER,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
  export const AddProductSousDossier = (idfolder,idsousdossier,Libelles,TVA,coutU,MontantHt) => async (dispatch) => {
    const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
    try {
      const res = await axios.post(
        `/api/folder/sous-dossier/Mantant/${idfolder}/${idsousdossier}`,
        {Libelles,TVA,coutU,MontantHt},
        config
      );
  
      dispatch({
        type: ADD_PRODUCT_SOUSD,
        payload: res.data,
      });
  
      dispatch(SetAlert('Colis Added', 'success'));
    } catch (err) {
      dispatch({
        type: ERROR_FOLDER,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
  export const AddBonLivr = (idfolder,DateDepardLivr,DateArriveeLivr) => async (dispatch) => {
    const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
    
    try {
      const res = await axios.post(
        `/api/folder/BL/${idfolder}`,
        {DateDepardLivr,DateArriveeLivr},
        config
      );
  
      dispatch({
        type: ADD_BONLIV,
        payload: res.data,
      });
  
      dispatch(SetAlert('BL Added', 'success'));
    } catch (err) {
      dispatch({
        type: ERROR_FOLDER,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };





  export const AddBonLivrSD = (idfolder,idsousdossier,DateDepardLivr,DateArriveeLivr) => async (dispatch) => {
    const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
    
    try {
      const res = await axios.post(
        `/api/folder/BL/${idfolder}/${idsousdossier}`,
        {DateDepardLivr,DateArriveeLivr},
        config
      );
  
      dispatch({
        type: ADD_BONLIVSD,
        payload: res.data,
      });
  
      dispatch(SetAlert('BL Added', 'success'));
    } catch (err) {
      dispatch({
        type: ERROR_FOLDER,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };









  export const AddMontant = (idfolder,Libelles,TVA,coutU,MontantHt) => async (dispatch) => {
    const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
    
    try {
      const res = await axios.post(
        `/api/folder/Mantant/${idfolder}`,
        {Libelles,TVA,coutU,MontantHt},
        config
      );
  
      dispatch({
        type: ADD_MARCHANDISE,
        payload: res.data,
      });
  
      dispatch(SetAlert('Successfuly Added', 'success'));
    } catch (err) {
      dispatch({
        type: ERROR_FOLDER,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

export const addFolder = (myclient,myagent,fournisseur,type) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    try {
      const res = await axios.post(
        `/api/folder/`,
        {myclient,myagent,fournisseur,type},
        config
      );
  
      dispatch({
        type: ADD_FOLDER,
        payload: res.data,
      });
      dispatch(SetAlert('Folder Added', 'success'));
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach((error) => dispatch(SetAlert(error.msg, 'danger')));
        }
      dispatch({
        type: ERROR_FOLDER 
    });
    }
  };

  export const addSousFolder = (idfolder,fournisseur,myagent,type,Transporteur,TypeTransporteur,Atraver,MBL,HBL,DateDepard,DateArrivee,Ref,AdresseFacturation,CondLivraison) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    try {
      const res = await axios.post(
        `/api/folder/sous-dossier/${idfolder}`,
        {fournisseur,myagent,type,Transporteur,TypeTransporteur,Atraver,MBL,HBL,DateDepard,DateArrivee,Ref,AdresseFacturation,CondLivraison},
        config
      );
  
      dispatch({
        type: ADD_SOUSFOLDER,
        payload: res.data,
      });
      dispatch(SetAlert('Folder Added', 'success'));
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach((error) => dispatch(SetAlert(error.msg, 'danger')));
        }
      dispatch({
        type: ERROR_FOLDER 
    });
    }
  };
  
export const AddTransporteur = (idfolder,Transporteur,TypeTransporteur,Atraver,Routing,HBL,MBL,Ref,AdresseFacturation,DateDepard,DateArrivee,CondLivraison,NumEscale,NumRubrique) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    try {
    const res=  await axios.post(
        `/api/folder/Transporteur/${idfolder}`,
        {Transporteur,TypeTransporteur,Atraver,Routing,HBL,MBL,Ref,AdresseFacturation,DateDepard,DateArrivee,CondLivraison,NumEscale,NumRubrique},
        config
      );
      dispatch({
        type: ADD_TRANSPORTEUR,
        payload: res.data,
      });
  
      dispatch(SetAlert('Transporteur Added', 'success'));
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach((error) => dispatch(SetAlert(error.msg, 'danger')));
        }
      dispatch({
        type: ERROR_FOLDER 
    });
    }
  };

  export const addlTA = (idfolder,AirportDeparture,AirportDestination,FLIGHT1,FLIGHT2,TO1,FIRSTCARRIER,TO2,BY2,TO3,BY3,CURRENCY,CHGS,RATE,DESCRIPTION,tax,ChargeAgent,ChargeCarrier,typelta) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    try {
    const res=  await axios.post(
        `/api/folder/LTA/${idfolder}`,
        {AirportDeparture,AirportDestination,FLIGHT1,FLIGHT2,TO1,FIRSTCARRIER,TO2,BY2,TO3,BY3,CURRENCY,CHGS,RATE,DESCRIPTION,tax,ChargeAgent,ChargeCarrier,typelta},
        config
      );
      dispatch({
        type: ADD_LTA,
        payload: res.data,
      });
  
      dispatch(SetAlert('Transporteur Added', 'success'));
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach((error) => dispatch(SetAlert(error.msg, 'danger')));
        }
      dispatch({
        type: ERROR_FOLDER 
    });
    }
  };





  export const addlTASDs = (idfolder,idsousdossier,AirportDeparture,AirportDestination,FLIGHT1,FLIGHT2,TO1,FIRSTCARRIER,TO2,BY2,TO3,BY3,CURRENCY,CHGS,RATE,DESCRIPTION,tax,ChargeAgent,ChargeCarrier,typelta) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    try {
    const res=  await axios.post(
        `/api/folder/LTA/${idfolder}/${idsousdossier}`,
        {AirportDeparture,AirportDestination,FLIGHT1,FLIGHT2,TO1,FIRSTCARRIER,TO2,BY2,TO3,BY3,CURRENCY,CHGS,RATE,DESCRIPTION,tax,ChargeAgent,ChargeCarrier,typelta},
        config
      );
      dispatch({
        type: ADD_LTASD,
        payload: res.data,
      });

  
      dispatch(SetAlert('Transporteur Added', 'success'));
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach((error) => dispatch(SetAlert(error.msg, 'danger')));
        }
      dispatch({
        type: ERROR_FOLDER 
    });
    }
  };


  export const AddAvisAriveee = (idfolder,Transporteur,TypeTransporteur,Atraver,Routing,HBL,DateDepard,DateArrivee,CondLivraison,NumEscale,NumRubrique) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    try {
    const res=  await axios.post(
        `/api/folder/avisarrivee/${idfolder}`,
        {Transporteur,TypeTransporteur,Atraver,Routing,HBL,DateDepard,DateArrivee,CondLivraison,NumEscale,NumRubrique},
        config
      );
      dispatch({
        type: ADD_AVIDDEPARDD,
        payload: res.data,
      });
  
      dispatch(SetAlert('Avid Arrivée a ajouter', 'success'));
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach((error) => dispatch(SetAlert(error.msg, 'danger')));
        }
      dispatch({
        type: ERROR_FOLDER 
    });
    }
  };
  export const getFolders = () => async (dispatch) => {

    try {
      const res = await axios.get(
        `/api/folder`,
      );
      dispatch({
        type: GET_FOLDERS,
        payload: res.data,
      });
    } catch (err) {
        dispatch({
        type: ERROR_FOLDER,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

  
  
  export const getFolder= (id) => async (dispatch) => {

    try {
      const res = await axios.get(
        `/api/folder/${id}`,
      );
      dispatch({
        type: GET_FOLDER,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ERROR_FOLDER,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

  export const getSousDossier= (idfolder,idsousdossier) => async (dispatch) => {

    try {
      const res = await axios.get(
        `/api/folder/sous-dossier/${idfolder}/${idsousdossier}`,
      );
      dispatch({
        type: GET_SOUSDOSSIER,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ERROR_FOLDER,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };



  export const editMarch = (id,myid,MarqueNum,nbColis,Marchedise,poids,Volume,dimension) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    try {
      const d=dimension.split('*')
    const res=  await axios.put(
        `/api/folder/Marchenndise/${id}`,
        {myid,MarqueNum,nbColis,Marchedise,poids,Volume,dimension,poidstocable:(((d[0]/100)*(d[1]/100)*(d[2]/100)*1000*nbColis)/6),},
        config
      );
      dispatch({
        type: GET_FOLDER,
        payload: res.data,
      });

  
      dispatch(SetAlert('Edited Succesfully', 'success'));
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach((error) => dispatch(SetAlert(error.msg, 'danger')));
        }
      dispatch({
        type: ERROR_FOLDER 
    });
    
    }
  };


  export const editMontant = (id,myid,Libelles,coutU,MontantHt,TVA) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    try {
    const res=  await axios.put(
        `/api/folder/Montant/${id}`,
        {myid,Libelles,coutU,MontantHt,TVA},
        config
      );
      dispatch({
        type: GET_FOLDER,
        payload: res.data,
      });

  
      dispatch(SetAlert('Edited Succesfully', 'success'));
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach((error) => dispatch(SetAlert(error.msg, 'danger')));
        }
      dispatch({
        type: ERROR_FOLDER 
    });
    
    }
  };


  export const editMarchsd = (idfolder,idsousdossier,myid,MarqueNum,nbColis,Marchedise,poids,Volume,dimension) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    try {
      const d=dimension.split('*')
    const res=  await axios.put(
        `/api/folder/sousdossier/Marchenndise/${idfolder}`,
        {idsousdossier,myid,MarqueNum,nbColis,Marchedise,poids,Volume,dimension,poidstocable:(((d[0]/100)*(d[1]/100)*(d[2]/100)*1000*nbColis)/6),},
        config
      );
      dispatch({
        type: GET_SOUSDOSSIER,
        payload: res.data,
      });

  
      dispatch(SetAlert('Edited Succesfully', 'success'));
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach((error) => dispatch(SetAlert(error.msg, 'danger')));
        }
      dispatch({
        type: ERROR_FOLDER 
    });
    
    }
  };

  export const editMontantsd = (idfolder,idsousdossier,myid,Libelles,coutU,MontantHt,TVA) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    try {
    const res=  await axios.put(
        `/api/folder/sousdossier/Montant/${idfolder}`,
        {idsousdossier,myid,Libelles,coutU,MontantHt,TVA},
        config
      );
      dispatch({
        type: GET_SOUSDOSSIER,
        payload: res.data,
      });

  
      dispatch(SetAlert('Edited Succesfully', 'success'));
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach((error) => dispatch(SetAlert(error.msg, 'danger')));
        }
      dispatch({
        type: ERROR_FOLDER 
    });
    
    }
  };