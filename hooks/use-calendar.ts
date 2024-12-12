'use client';

import { useWorkouts } from './use-workouts';
import { isSameDay } from '@/utils/date';

export function useCalendar() {
  const { workouts } = useWorkouts();

  const getWorkoutsForDate = (date: Date) => {
    return workouts.filter((workout) =>
      isSameDay(new Date(workout.date), date)
    );
  };

  return {
    getWorkoutsForDate,
  };
}