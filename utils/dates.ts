import {
  startOfDay,
  endOfDay,
  startOfWeek,
  endOfWeek,
} from 'date-fns'

export const isBetween = (date: any, [start, end]: any) => {
  return +new Date(date) >= +new Date(start) && +new Date(date) <= +new Date(end);
}

export const shouldDispayEventForDay = (event: any, date: any) => {
  if (isBetween(event.start, [startOfDay(date), endOfDay(date)])) {
    return true
  }

  if (isBetween(startOfDay(date), [event.start, event.end])) {
    return true
  }
  return false;
}

export const shouldDispayEventForWeek = (event: any, date: any) => {
  if (isBetween(event.start, [startOfWeek(date), endOfWeek(date)])) {
    return true
  }

  if (isBetween(startOfWeek(date), [event.start, event.end])) {
    return true
  }
  return false;
}
