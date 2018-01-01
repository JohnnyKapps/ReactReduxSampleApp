import { combineReducers } from 'redux';
import WeightReducer from './reducer-weights';
import ActiveWeightReducer from './reduce-active-weight';

const allReducers = combineReducers({
    weights: WeightReducer,
    activeWeight: ActiveWeightReducer
});

export default allReducers;