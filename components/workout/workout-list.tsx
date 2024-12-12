'use client';

import { WorkoutTable } from './workout-table';
import { WorkoutForm } from './workout-form';

export function WorkoutList() {
  return (
    <div>
      <WorkoutForm />
      <WorkoutTable />
    </div>
  );
}