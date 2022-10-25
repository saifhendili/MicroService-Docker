import {
    ADD_FOLDER,ERROR_FOLDER,ADD_MARCHANDISE,ADD_TRANSPORTEUR,GET_FOLDER,GET_FOLDERS,ADD_AVIDDEPARDD,ADD_BONLIV,ADD_LTA,ADD_SOUSFOLDER,ADD_MARCHANDISE_SOUSD,ADD_PRODUCT_SOUSD,GET_SOUSDOSSIER,ADD_LTASD,ADD_BONLIVSD
} from '../Constants/FolderConst';

  const initialState = {
    loading: true,
    folders: [],
    folder: null,
    error: {},
idfolder:null,
idsousdossier:null,
sousdossier: null,
  };


  export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case ADD_LTASD:
        return{
          ...state,
          sousdossier: payload,
          loading: false,
        } 
        case ADD_BONLIVSD:
          return{
            ...state,
            sousdossier: payload,
            loading: false,
          } 
      case GET_SOUSDOSSIER:
        return{
          ...state,
          sousdossier: payload,
          loading: false,
        } 
      case ADD_PRODUCT_SOUSD:
        return{
          ...state,
          sousdossier: payload,
          loading: false,
        } 
      case ADD_MARCHANDISE_SOUSD:
        return     {
          ...state,
          sousdossier: payload,
          loading: false,
        }
      case ADD_SOUSFOLDER:
        return{
          ...state,
          sousdossier:payload.sousd,
          idsousdossier: payload.id,
          loading: false,
        }
      case ADD_BONLIV: 
       return {
        ...state,
        folder: payload,
        loading: false,
 
}
case ADD_LTA:
  return{
    ...state,
    folder: payload,
    loading: false,
  }
        case GET_FOLDER:
    return {
            ...state,
            folder: payload,
            loading: false,
     
    }
        case ADD_AVIDDEPARDD:
            return {
                ...state,
                folder: payload,
                loading: false,
         
        }
    case GET_FOLDERS:
    return {
            ...state,
            folders: payload,
            loading: false,
     
    }
case ADD_TRANSPORTEUR:
    return {
            ...state,
            folder: payload,
            loading: false,
     
    }
        case ADD_MARCHANDISE :
            return {
                ...state,
                folder: payload,
                loading: false,
            };
      case ADD_FOLDER:
            return {
                ...state,
                idfolder: payload,
                loading: false,
            };
         
              case ERROR_FOLDER:
                return {
                  ...state,
                  error: payload,
                  loading: false,
        
                };
  
                default:
                    return state;
    }
  }