import { configureStore } from '@reduxjs/toolkit';
import BugReducer from './BugReducer';

const store = configureStore({
    reducer: {
        BugReducer,
    }
})
export default store;