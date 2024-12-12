import { Button } from 'react-bootstrap';
import { Workout } from '@/types/workout';
import { useWorkouts } from '@/hooks/use-workouts';

export const getWorkoutColumns = (onDelete: (id: string) => void) => [
  {
    dataField: 'name',
    text: 'Workout Name',
    editor: {
      type: 'text',
    },
  },
  {
    dataField: 'date',
    text: 'Date',
    editor: {
      type: 'date',
    },
  },
  {
    dataField: 'exercises',
    text: 'Exercises',
    editor: {
      type: 'text',
    },
    formatter: (cell: string[]) => cell.join(', '),
  },
  {
    dataField: 'duration',
    text: 'Duration (minutes)',
    editor: {
      type: 'number',
    },
  },
  {
    dataField: 'actions',
    text: 'Actions',
    formatter: (cell: any, row: Workout) => (
      <Button
        variant="danger"
        size="sm"
        onClick={() => onDelete(row.id)}
      >
        Delete
      </Button>
    ),
  },
];