import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Workout } from '@/types/workout';

interface WorkoutState {
  workouts: Workout[];
  selectedWorkout: Workout | null;
}

const initialState: WorkoutState = {
  workouts: [
    {
      id: '1',
      name: 'Pull 1',
      date: new Date().toISOString().split('T')[0],
      exercises: ['Pull-ups', 'Rows', 'Bicep Curls'],
      duration: 60,
    },
    {
      id: '2',
      name: 'Push 1',
      date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
      exercises: ['Bench Press', 'Shoulder Press', 'Tricep Extensions'],
      duration: 60,
    },
    {
      id: '3',
      name: 'Leg 1',
      date: new Date(Date.now() + 172800000).toISOString().split('T')[0],
      exercises: ['Squats', 'Deadlifts', 'Lunges'],
      duration: 60,
    },
  ],
  selectedWorkout: null,
};

export const workoutSlice = createSlice({
  name: 'workouts',
  initialState,
  reducers: {
    addWorkout: (state, action: PayloadAction<Workout>) => {
      state.workouts.push(action.payload);
    },
    removeWorkout: (state, action: PayloadAction<string>) => {
      state.workouts = state.workouts.filter(
        (workout) => workout.id !== action.payload
      );
    },
    updateWorkout: (state, action: PayloadAction<Workout>) => {
      const index = state.workouts.findIndex(
        (workout) => workout.id === action.payload.id
      );
      if (index !== -1) {
        state.workouts[index] = action.payload;
      }
    },
    selectWorkout: (state, action: PayloadAction<string>) => {
      state.selectedWorkout = state.workouts.find(
        (workout) => workout.id === action.payload
      ) || null;
    },
    clearSelectedWorkout: (state) => {
      state.selectedWorkout = null;
    },
  },
});

export const {
  addWorkout,
  removeWorkout,
  updateWorkout,
  selectWorkout,
  clearSelectedWorkout,
} = workoutSlice.actions;

export default workoutSlice.reducer;