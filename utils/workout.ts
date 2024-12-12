import { Workout } from '@/types/workout';

export function createEmptyWorkout(): Workout {
  return {
    id: Date.now().toString(),
    name: 'New Workout',
    date: new Date().toISOString().split('T')[0],
    exercises: [],
    duration: 60,
  };
}

export function validateWorkout(workout: Workout): boolean {
  return (
    workout.name.trim() !== '' &&
    workout.date !== '' &&
    workout.duration > 0
  );
}