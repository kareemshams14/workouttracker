'use client';

import { Modal, Form, Button } from 'react-bootstrap';
import { useWorkouts } from '@/lib/hooks/use-workouts';
import { useWorkoutForm, WorkoutFormData } from '@/lib/hooks/use-form';

interface WorkoutFormModalProps {
  show: boolean;
  onHide: () => void;
}

export function WorkoutFormModal({ show, onHide }: WorkoutFormModalProps) {
  const { addNewWorkout } = useWorkouts();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useWorkoutForm();

  const onSubmit = (data: WorkoutFormData) => {
    addNewWorkout({
      ...data,
      id: Date.now().toString(),
      exercises: data.exercises || [],
    });
    reset();
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Workout</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Workout Name</Form.Label>
            <Form.Control
              type="text"
              isInvalid={!!errors.name}
              {...register('name')}
            />
            {errors.name && (
              <Form.Control.Feedback type="invalid">
                {errors.name.message}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              isInvalid={!!errors.date}
              {...register('date')}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Duration (minutes)</Form.Label>
            <Form.Control
              type="number"
              isInvalid={!!errors.duration}
              {...register('duration', { valueAsNumber: true })}
            />
            {errors.duration && (
              <Form.Control.Feedback type="invalid">
                {errors.duration.message}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <div className="d-flex justify-content-end gap-2">
            <Button variant="secondary" onClick={onHide}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Add Workout
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}