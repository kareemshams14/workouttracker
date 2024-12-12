import { configureStore } from '@reduxjs/toolkit';
import workoutReducer from './workoutSlice';

export const store = configureStore({
  reducer: {
    workouts: workoutReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;