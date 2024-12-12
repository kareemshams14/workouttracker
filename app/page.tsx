'use client';

import { WorkoutList } from '@/components/workout/workout-list';

export default function Home() {
  return (
    <div className="container">
      <h1 className="mb-4">Workout Plans</h1>
      <WorkoutList />
    </div>
  );
}