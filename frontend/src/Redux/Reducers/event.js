import {
    ADD_EVENT,GET_EVENT,GET_EVENTS,EDIT_EVENT,DELETE_EVENT,ERROR_EVENT
} from '../Constants/Eventconst';

  const initialState = {
    loading: true,
    events: [],
    event: null,
    error: {},
  };
  export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case GET_EVENTS :
            return {
                ...state,
                events: payload,
                loading: false,
            };
        case GET_EVENT :
            return {
                ...state,
                event: payload,
                loading: false,
            };
      case ADD_EVENT:
            return {
                ...state,
                events: [payload, ...state.events],
                loading: false,
            };
            case DELETE_EVENT:
                return {
                  ...state,
                  events: state.events.filter((o) => o.id!== payload),
                  loading: false,
                };
              case ERROR_EVENT:
                return {
                  ...state,
                  error: payload,
                  loading: false,
        
                };
  
                default:
                    return state;
    }
  }