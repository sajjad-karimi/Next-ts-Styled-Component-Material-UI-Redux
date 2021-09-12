import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import counterReducer from './counter';

const reducers = combineReducers({
  counter: counterReducer,
  form: formReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
