'use client';

import { Row, Col } from 'react-bootstrap';
import { Activity, Calendar, Clock } from 'lucide-react';
import { useWorkouts } from '@/hooks/use-workouts';
import { SummaryCard } from '@/components/summary/summary-card';
import { WorkoutStats } from '@/components/summary/workout-stats';

export default function SummaryPage() {
  const { workouts } = useWorkouts();

  const totalWorkouts = workouts.length;
  const totalDuration = workouts.reduce((acc, curr) => acc + curr.duration, 0);
  const uniqueDates = new Set(workouts.map((w) => w.date)).size;

  return (
    <div className="container">
      <h1 className="mb-4">Workout Summary</h1>
      <Row>
        <Col md={4}>
          <SummaryCard
            title="Total Workouts"
            value={totalWorkouts}
            Icon={Activity}
          />
        </Col>
        <Col md={4}>
          <SummaryCard
            title="Total Duration"
            value={`${totalDuration} minutes`}
            Icon={Clock}
          />
        </Col>
        <Col md={4}>
          <SummaryCard
            title="Active Days"
            value={uniqueDates}
            Icon={Calendar}
          />
        </Col>
      </Row>
      <WorkoutStats />
    </div>
  );
}