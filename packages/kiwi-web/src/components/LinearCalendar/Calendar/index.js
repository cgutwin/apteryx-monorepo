import { AnimateSharedLayout } from "framer-motion"
import PropTypes from "prop-types"
import React from "react"
import DayDisplay from "../DayDisplay"
import { CalendarWrapper } from "./styles"

export default function Calendar({
  dates,
  selectedDate,
  onChangeSelectedDate,
  ...rest
}) {
  return (
    <CalendarWrapper numberOfDates={dates.length} {...rest}>
      <AnimateSharedLayout>
        {dates.map((date, i) => {
          // If the current iterated date === the selected date, then its considered "active" (true).
          const isSelected = date.getTime() === selectedDate.getTime()
          return (
            <DayDisplay
              key={i}
              onClick={() => onChangeSelectedDate(date)}
              date={date}
              selected={isSelected}
            />
          )
        })}
      </AnimateSharedLayout>
    </CalendarWrapper>
  )
}

Calendar.propTypes = {
  dates: PropTypes.arrayOf(PropTypes.instanceOf(Date)).isRequired,
  onChangeSelectedDate: PropTypes.func.isRequired,
  selectedDate: PropTypes.instanceOf(Date).isRequired
}
