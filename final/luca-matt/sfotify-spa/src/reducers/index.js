import { combineReducers } from 'redux';

import songs from './songReducer';
import artist from './artistReducer';

export default combineReducers({
  songs,
  artist,
});
