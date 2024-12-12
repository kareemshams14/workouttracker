'use client';

import { Card, Row, Col } from 'react-bootstrap';
import { useWorkouts } from '@/hooks/use-workouts';

export function WorkoutStats() {
  const { workouts } = useWorkouts();

  const totalExercises = workouts.reduce(
    (acc, workout) => acc + workout.exercises.length,
    0
  );

  const averageDuration =
    workouts.length > 0
      ? Math.round(
          workouts.reduce((acc, workout) => acc + workout.duration, 0) /
            workouts.length
        )
      : 0;

  const workoutTypes = new Set(workouts.map((w) => w.name)).size;

  return (
    <Card className="mt-4">
      <Card.Body>
        <h3 className="mb-4">Detailed Statistics</h3>
        <Row>
          <Col md={4}>
            <div className="text-center">
              <h4>{totalExercises}</h4>
              <p className="text-muted">Total Exercises</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="text-center">
              <h4>{averageDuration} min</h4>
              <p className="text-muted">Average Duration</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="text-center">
              <h4>{workoutTypes}</h4>
              <p className="text-muted">Workout Types</p>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}