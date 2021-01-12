/**
 * @function getDateWithoutTime
 * @param {Date} [date] - The date you want to strip the time from (optional, defaults to todays date).
 * @returns {Date}
 * */
export default function getDateWithoutTime(date = new Date()) {
  const dateString = date.toString().split(" ").splice(1, 3).join(" ")
  return new Date(Date.parse(dateString))
}
