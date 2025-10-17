import { combineReducers } from '@reduxjs/toolkit';

import authentications from '@redux/reducers/authentications';

const reducers = combineReducers({
    authentications,
});

export default reducers;