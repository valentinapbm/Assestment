import { createStore,combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import productReducer from "./reducers/productReducer";
import productDetailReducer from "./reducers/productDetailReducer";
const rootReducer = combineReducers({
    productReducer, productDetailReducer
    });
    
const middleware = applyMiddleware(thunk);


    export const store = createStore(rootReducer,middleware);