import { combineReducers } from 'redux';
import counterReducerA from './reducers/panelA'
import counterReducerB from './reducers/panelB'
import counterReducerC from './reducers/panelC'
import counterReducerD from './reducers/panelD'



const rootReducer = combineReducers({
  panel1: counterReducerA,
  panel2: counterReducerB,
  panel3: counterReducerC,
  panel4: counterReducerD
});

export default rootReducer;