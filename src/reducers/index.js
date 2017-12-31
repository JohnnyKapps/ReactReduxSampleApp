import { combineReducers } from 'redux';
import WeightReducer from './reducer-weights';
import ActiveWeightReducer from './reduce-active-weight';

const allReducers = combineReducers({
    weights: WeightReducer,
    activeUser: ActiveWeightReducer
});

export default allReducers;