export function getStayNights(arrival: string, departure: string): number {
  const start = Date.parse(`${arrival}T00:00:00Z`);
  const end = Date.parse(`${departure}T00:00:00Z`);
  if (!Number.isFinite(start) || !Number.isFinite(end) || end <= start) return 0;
  return Math.round((end - start) / 86400000);
}
