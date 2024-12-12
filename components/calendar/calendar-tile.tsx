'use client';

import { Badge } from 'react-bootstrap';
import { Workout } from '@/types/workout';

interface CalendarTileProps {
  workouts: Workout[];
}

export function CalendarTile({ workouts }: CalendarTileProps) {
  if (workouts.length === 0) return null;

  return (
    <div className="workout-badges">
      {workouts.map((workout) => (
        <Badge key={workout.id} bg="primary" className="me-1">
          {workout.name}
        </Badge>
      ))}
    </div>
  );
}