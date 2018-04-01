import { createStore, combineReducers, compose } from 'redux';

import placesReducer from './reducers/places';
import userReducer from './reducers/user_reducer';

const rootReducer = combineReducers({
    places: placesReducer,
    user_reducer:userReducer
});

let composeEnhancers = compose;

if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(rootReducer, composeEnhancers());
};

export default configureStore;