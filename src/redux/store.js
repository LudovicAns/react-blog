import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk";
import dataArtcilesReducer from "./reducers/dataArticlesReducer";

const store = createStore(dataArtcilesReducer, applyMiddleware(thunk));

export default store;