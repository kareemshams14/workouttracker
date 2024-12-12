'use client';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import { Button } from 'react-bootstrap';
import { Plus } from 'lucide-react';
import { RootState } from '@/lib/store/store';
import { addWorkout, removeWorkout, updateWorkout, Workout } from '@/lib/store/workoutSlice';

export default function WorkoutTable() {
  const dispatch = useDispatch();
  const workouts = useSelector((state: RootState) => state.workouts.workouts);
  const [newWorkout, setNewWorkout] = useState<Partial<Workout>>({});

  const columns = [
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
          onClick={() => dispatch(removeWorkout(row.id))}
        >
          Delete
        </Button>
      ),
    },
  ];

  const handleAddWorkout = () => {
    const workout: Workout = {
      id: Date.now().toString(),
      name: 'New Workout',
      date: new Date().toISOString().split('T')[0],
      exercises: [],
      duration: 60,
    };
    dispatch(addWorkout(workout));
  };

  return (
    <div>
      <Button variant="primary" className="mb-3" onClick={handleAddWorkout}>
        <Plus className="me-2" />
        Add Workout
      </Button>
      <BootstrapTable
        keyField="id"
        data={workouts}
        columns={columns}
        cellEdit={cellEditFactory({
          mode: 'click',
          blurToSave: true,
          afterSaveCell: (oldValue: any, newValue: any, row: Workout) => {
            dispatch(updateWorkout(row));
          },
        })}
      />
    </div>
  );
}