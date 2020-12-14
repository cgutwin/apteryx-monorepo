import * as PropTypes from "prop-types"
import React from "react"
import { Date, Day, Display, SelectedDate, SelectedDay } from "./style"

export default function DayDisplay({ day, date, isSelected = false, ...props }) {
  const dateItem = isSelected ? <SelectedDate>{date.toString()}</SelectedDate> : <Date>{date.toString()}</Date>

  const dayItem = isSelected ? (
    <SelectedDay>{day.substr(0, 3).toUpperCase()}</SelectedDay>
  ) : (
    <Day>{day.substr(0, 3).toUpperCase()}</Day>
  )

  return (
    <Display {...props}>
      {dayItem}
      {dateItem}
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
