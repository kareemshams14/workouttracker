'use client';

import { WorkoutCalendar } from '@/components/calendar/workout-calendar';

export default function CalendarPage() {
  return (
    <div className="container">
      <h1 className="mb-4">Workout Calendar</h1>
      <WorkoutCalendar />
    </div>
  );
}