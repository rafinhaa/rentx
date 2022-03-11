import { addDays } from "date-fns";

export function getPlataformDate(date: Date): Date {
  return addDays(date, 1);
}
