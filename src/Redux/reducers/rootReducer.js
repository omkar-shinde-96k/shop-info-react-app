import { combineReducers } from 'redux'; 
import { categoryReducer } from './categoryReducer';
import { areaReducer } from './areaReducer';
import { shopReducer } from './shopReducer';

const rootReducer = combineReducers({
    categoryReducer,
    areaReducer,
    shopReducer
})

export default rootReducer;