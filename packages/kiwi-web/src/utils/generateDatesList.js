import { DAY_IN_MS } from "./constants"
import getDateWithoutTime from "./getDateWithoutTime"

/**
 * @function generateDatesList
 * Creates an array of dates, starting from the specified starting date, until the number of dates in the future
 * has been reached.
 *
 * @param {number} [amount] - The number of days to generate (optional, default is 5).
 * @param {Date} [startDate] - The first date to start generating dates from (optional, default is todays date).
 * @returns {Date[]}
 * */
export default function generateDatesList(amount = 5, startDate = new Date()) {
  const startDateWithoutTime = getDateWithoutTime(startDate)
  const dates = []

  let dateAwayFromStart = 0
  // Days away from start will increase as the loop goes on, multiplying more days the original start date,
  // and yielding closer dates.
  while (dateAwayFromStart < amount) {
    // Date.parse will turn a Date object to a Unix timestamp.
    const dateNAwayFromStartInMs =
      Date.parse(startDateWithoutTime.toString()) +
      DAY_IN_MS * dateAwayFromStart
    dates.push(new Date(dateNAwayFromStartInMs))
    dateAwayFromStart++
  }

  return dates
}
