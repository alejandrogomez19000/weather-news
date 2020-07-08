import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import sagas from "core/sagasRoot";
import reducers from "core/reducerRoot";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, compose(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(sagas);

export default store;
