import {
    ADD_ASSOC,GET_ASSOCS,GET_ASSOC,EDIT_ASSOC,DELETE_ASSOC,ERROR_ASSOC
} from '../Constants/associationConst';

  const initialState = {
    loading: true,
    associas: [],
    associa: null,
    error: {},
  };
  export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case GET_ASSOCS :
            return {
                ...state,
                associas: payload,
                loading: false,
            };
        case GET_ASSOC :
            return {
                ...state,
                associa: payload,
                loading: false,
            };
      case ADD_ASSOC:
            return {
                ...state,
                associas: [payload, ...state.associas],
                loading: false,
            };
            case DELETE_ASSOC:
                return {
                  ...state,
                  associas: state.associas.filter((o) => o.id!== payload),
                  loading: false,
                };
              case ERROR_ASSOC:
                return {
                  ...state,
                  error: payload,
                  loading: false,
        
                };
  
                default:
                    return state;
    }
  }