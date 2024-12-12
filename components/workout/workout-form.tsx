'use client';

import { Button } from 'react-bootstrap';
import { Plus } from 'lucide-react';
import { useModal } from '@/lib/hooks/use-modal';
import { WorkoutFormModal } from './workout-form-modal';

export function WorkoutForm() {
  const { isOpen, open, close } = useModal();

  return (
    <>
      <Button variant="primary" className="mb-3" onClick={open}>
        <Plus className="me-2" />
        Add Workout
      </Button>
      <WorkoutFormModal show={isOpen} onHide={close} />
    </>
  );
}