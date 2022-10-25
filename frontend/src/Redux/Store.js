import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { auth } from "./Reducers/auth";
import { alert } from "./Reducers/alert";
import client from "./Reducers/client";
import fournisseur from "./Reducers/fournisseur";
import folder from "./Reducers/folder";
import facture from "./Reducers/facture";
import agent from "./Reducers/agent";
import blog from "./Reducers/blog";
import entretien from "./Reducers/entretien";
import event from "./Reducers/event";
import association from "./Reducers/association";

const reducer = combineReducers({
    auth,
    alert,
    client,
    fournisseur,
    folder,
    facture,
    agent,blog,
    entretien,
    event,
    association
})
const initialState ={}
const middleware={thunk}
 
const store= createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...Object.values   ( middleware)))

)
export default store;