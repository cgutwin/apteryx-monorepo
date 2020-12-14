import { DAY_IN_MS, DAYS_OF_WEEK_STRING } from "../constants"

/**
 * # getDayFromToday
 * @param {number} n = 0
 * Number of days to get from today.
 * */
export default function getDateFromToday(n = 0) {
  const today = new Date(Date.now())
  /**
   * This contains the default date object to return. Only returns when n = 0
   * as you can't multiply the day length in ms by 0 for 0 days in advance.
   *
   * @property {Date} date - The javascript date object for the future date
   * @property {number} dateNumInMonth - The numeric date of the month
   * @property {number} dayOfWeek - The day in the week, 0 = Sunday
   */
  let futureDateObject = {
    dateObject: today,
    date: today.getDate(),
    day: DAYS_OF_WEEK_STRING[today.getDay()]
  }

  if (n !== 0) {
    const daysN = DAY_IN_MS * n
    const future = Date.now() + daysN
    // The new date in ms of today + n days
    const futureDate = new Date(future)

    futureDateObject = {
      dateObject: futureDate,
      date: futureDate.getDate(),
      day: DAYS_OF_WEEK_STRING[futureDate.getDay()]
    }
  }

  return futureDateObject
}
