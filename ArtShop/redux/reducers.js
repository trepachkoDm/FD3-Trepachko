import { combineReducers } from 'redux';

import catalogReduser from "./catalogReduser";


let combinedReducer = combineReducers({
    catalogList: catalogReduser,
});

export default combinedReducer;
