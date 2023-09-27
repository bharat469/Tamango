import {combineReducers} from 'redux';

import {RegisterScreenReducer} from '../../components/Auth/register/reducer';
import {SaveTokenReducer} from '../../components/Auth/Login/reducer';

const rootReducer = combineReducers({
  Register: RegisterScreenReducer,
  SaveToken: SaveTokenReducer,
});

export default rootReducer;
