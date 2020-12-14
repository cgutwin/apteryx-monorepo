/**
 * The array which contains date information for n days.
 *
 * @typedef {Object} GeneratedDate
 * @property {Date} dateObject - The date object for the generated date.
 * @property {number} date - The date (of the month).
 * @property {string} day - The day (of the week).
 */
import getDateFromToday from "./getDateFromToday"

/**
 * # generateDatesList
 * Creates an array of dates, starting from the specified starting date, until the number of dates in the future
 * has been reached.
 *
 * @returns {GeneratedDate[]}
 * */
export default function generateDatesList(daysShowing = 5, start = 0) {
  const end = start + daysShowing
  const dates = []

  for (let i = start; i < end; i++) dates.push(getDateFromToday(i))

  return dates
}
