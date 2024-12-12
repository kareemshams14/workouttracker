'use client';

import Calendar from 'react-calendar';
import { useWorkouts } from '@/hooks/use-workouts';
import { CalendarTile } from './calendar-tile';
import { isSameDay } from '@/utils/date';
import 'react-calendar/dist/Calendar.css';

export function WorkoutCalendar() {
  const { workouts } = useWorkouts();

  const tileContent = ({ date }: { date: Date }) => {
    const workoutsOnDate = workouts.filter((workout) =>
      isSameDay(new Date(workout.date), date)
    );

    return <CalendarTile workouts={workoutsOnDate} />;
  };

  return (
    <div className="calendar-wrapper">
      <Calendar tileContent={tileContent} className="w-100" />
    </div>
  );
}