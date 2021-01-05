import PropTypes from "prop-types"
import React from "react"
import Calendar from "./Calendar"
import { generateDatesList, useWindowDimensions } from "./utils"

export default function LinearCalendar({ startDate, selectedDate, ...props }) {
  const { width } = useWindowDimensions()
  /**
   * The dates render weird when the screen size is small, so lets dynamically generate the number of dates in the
   * calendar based on how much the screen will show.
   */
  const daysShowing = width >= 400 ? 7 : 5
  const datesToRender = generateDatesList(daysShowing, startDate)

  const activeChangeHandler = (date) => selectedDate.set(date)

  return (
    <Calendar
      activeChangeHandler={activeChangeHandler}
      selectedDate={selectedDate}
      datesToRender={datesToRender}
      {...props}
    />
  )
}

LinearCalendar.propTypes = {
  startDate: PropTypes.number.isRequired,
  selectedDate: PropTypes.shape({
    value: PropTypes.instanceOf(Date).isRequired,
    set: PropTypes.func.isRequired
  }).isRequired
}
