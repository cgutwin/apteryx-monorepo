import PropTypes from "prop-types"
import React from "react"
import generateDatesList from "../../utils/generateDatesList"
import getDateWithoutTime from "../../utils/getDateWithoutTime"
import Calendar from "./Calendar"

/**
 * @param {number} datesToDisplay
 * @param {function} onChangeSelectedDate
 * @param {Date} startDate
 * @param {Date} selectedDate
 * */
export default function LinearCalendar({
  datesToDisplay = 5,
  onChangeSelectedDate,
  startDate = new Date(),
  selectedDate = new Date(),
  ...rest
}) {
  const dates = generateDatesList(datesToDisplay, getDateWithoutTime(startDate))
  return (
    <Calendar
      dates={dates}
      selectedDate={selectedDate}
      onChangeSelectedDate={onChangeSelectedDate}
      {...rest}
    />
  )
}

LinearCalendar.propTypes = {
  datesToDisplay: PropTypes.number,
  onChangeSelectedDate: PropTypes.func.isRequired,
  startDate: PropTypes.instanceOf(Date),
  selectedDate: PropTypes.instanceOf(Date).isRequired
}
