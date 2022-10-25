import {
    ADD_AGENT,GET_AGENT,GET_AGENTS,EDIT_AGENT,DELETE_AGENT,ERROR_AGENT
} from '../Constants/Agentconst';

  const initialState = {
    loading: true,
    agents: [],
    agent: null,
    error: {},

  };
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_AGENTS :
            return {
                ...state,
                agents: payload,
                loading: false,
            };
        case GET_AGENT :
            return {
                ...state,
                agent: payload,
                loading: false,
            };
      case ADD_AGENT:
            return {
                ...state,
                agents: [payload, ...state.agents],
                loading: false,
            };
            case DELETE_AGENT:
                return {
                  ...state,
                  agents: state.agents.filter((o) => o._id!== payload),
                  loading: false,
                };
              case ERROR_AGENT:
                return {
                  ...state,
                  error: payload,
                  loading: false,
        
                };
  
                default:
                    return state;
    }
  }