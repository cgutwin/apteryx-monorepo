/**
 *Takes a datestamp (NO TIME), and converts it to ms.
 * @param {string} datestamp
 */
function datestampToMs(datestamp) {
  const dateString = new Date(datestamp).toString().split(" ").splice(1, 3).join(" ")
  return Date.parse(dateString)
}

export default datestampToMs
