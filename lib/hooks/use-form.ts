'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Workout } from '@/types/workout';

const workoutSchema = z.object({
  name: z.string().min(1, 'Workout name is required'),
  date: z.string(),
  exercises: z.array(z.string()).optional().default([]),
  duration: z.number().min(1, 'Duration must be at least 1 minute'),
});

export type WorkoutFormData = z.infer<typeof workoutSchema>;

export function useWorkoutForm(defaultValues?: Partial<Workout>) {
  return useForm<WorkoutFormData>({
    resolver: zodResolver(workoutSchema),
    defaultValues: {
      name: defaultValues?.name || '',
      date: defaultValues?.date || new Date().toISOString().split('T')[0],
      exercises: defaultValues?.exercises || [],
      duration: defaultValues?.duration || 60,
    },
  });
}