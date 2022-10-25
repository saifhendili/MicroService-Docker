import {
    ADD_FACTURE,ERROR_FACTURE,ADD_PRODUCT,GET_FACTURE
} from '../Constants/Factureconst';

  const initialState = {
    loading: true,
    facture: null,
    error: {},
idfacture:null
  };


  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
        case GET_FACTURE:
    return {
            ...state,
            facture: payload,
            loading: false,
    }
case ADD_FACTURE:
    return {
            ...state,
            idfacture: payload,
            loading: false,
     
    }
        case ADD_PRODUCT :
            return {
                ...state,
                facture: payload,
                loading: false,
            };

              case ERROR_FACTURE:
                return {
                  ...state,
                  error: payload,
                  loading: false,
        
                };
  
                default:
                    return state;
    }
  }