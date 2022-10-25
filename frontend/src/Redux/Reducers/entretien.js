import {
    ADD_ENTRETIEN,GET_ENTRETIEN,GET_ENTRETIENS,EDIT_ENTRETIEN,DELETE_ENTRETIEN,ERROR_ENTRETIEN
} from '../Constants/Entretienconst';

  const initialState = {
    loading: true,
    entretiens: [],
    entretien: null,
    error: {},

  };
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_ENTRETIENS :
            return {
                ...state,
                entretiens: payload,
                loading: false,
            };
        case GET_ENTRETIEN :
            return {
                ...state,
                entretien: payload,
                loading: false,
            };
      case ADD_ENTRETIEN:
            return {
                ...state,
                entretiens: [payload, ...state.entretiens],
                loading: false,
            };
            case DELETE_ENTRETIEN:
                return {
                  ...state,
                  entretiens: state.entretiens.filter((o) => o.idEntretien!== payload),
                  loading: false,
                };
              case ERROR_ENTRETIEN:
                return {
                  ...state,
                  error: payload,
                  loading: false,
        
                };
  
                default:
                    return state;
    }
  }