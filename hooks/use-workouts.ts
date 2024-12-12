'use client';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store/store';
import {
  addWorkout,
  removeWorkout,
  updateWorkout as updateWorkoutAction,
  Workout,
} from '@/lib/store/workoutSlice';

export function useWorkouts() {
  const dispatch = useDispatch();
  const workouts = useSelector((state: RootState) => state.workouts.workouts);

  const addNewWorkout = (workout: Omit<Workout, 'id'>) => {
    const newWorkout: Workout = {
      ...workout,
      id: Date.now().toString(),
    };
    dispatch(addWorkout(newWorkout));
  };

  const deleteWorkout = (id: string) => {
    dispatch(removeWorkout(id));
  };

  const updateWorkout = (workout: Workout) => {
    dispatch(updateWorkoutAction(workout));
  };

  return {
    workouts,
    addNewWorkout,
    deleteWorkout,
    updateWorkout,
  };
}