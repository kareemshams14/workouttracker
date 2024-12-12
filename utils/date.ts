export function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

export function isSameDay(date1: Date, date2: Date): boolean {
  return formatDate(date1) === formatDate(date2);
}