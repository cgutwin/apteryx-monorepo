import * as PropTypes from "prop-types"
import React from "react"
import { Date, Day, Display } from "./style"

export default function DayDisplay({ day, date, isSelected = false, ...props }) {
  return (
    <Display {...props}>
      <Day>{day.substr(0, 3).toUpperCase()}</Day>
      <Date selected={isSelected}>{date.toString()}</Date>
    </Display>
  )
}

DayDisplay.propTypes = {
  day: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  isSelected: PropTypes.bool
}

DayDisplay.defaultProps = {
  isSelected: false
}
