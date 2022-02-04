import { addDays } from "date-fns";
import { Platform } from "react-native";

export function getPlataformDate(date: Date): Date {
  if (Platform.OS === "ios") {
    return addDays(date, 1);
  }
  return date;
}