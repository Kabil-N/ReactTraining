import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import rootSaga from "./generators/rootSaga";
import MovieReducer from "./reducers/MovieReducer";

const reducers=combineReducers({
    search:MovieReducer,
})

const saga=createSagaMiddleware()
const middleware=[logger,thunk,saga]
export const store=createStore(reducers,applyMiddleware(...middleware)) 
saga.run(rootSaga)