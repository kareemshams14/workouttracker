'use client';

import { Table, Button } from 'react-bootstrap';
import { useWorkouts } from '@/hooks/use-workouts';
import { Workout } from '@/types/workout';

export function WorkoutTable() {
  const { workouts, deleteWorkout } = useWorkouts();

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Workout Name</th>
          <th>Date</th>
          <th>Exercises</th>
          <th>Duration (minutes)</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {workouts.map((workout: Workout) => (
          <tr key={workout.id}>
            <td>{workout.name}</td>
            <td>{new Date(workout.date).toLocaleDateString()}</td>
            <td>{workout.exercises.join(', ')}</td>
            <td>{workout.duration}</td>
            <td>
              <Button
                variant="danger"
                size="sm"
                onClick={() => deleteWorkout(workout.id)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}