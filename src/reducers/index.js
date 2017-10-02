import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import magic8Ball from './magic8Ball';

const rootReducer = combineReducers({
  form: formReducer,
  magic8Ball
})

export default rootReducer;
