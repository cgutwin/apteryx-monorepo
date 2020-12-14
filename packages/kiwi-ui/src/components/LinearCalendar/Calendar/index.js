import * as PropTypes from "prop-types"
import React from "react"
import DayDisplay from "../DayDisplay"
import { CalendarWrapper } from "./style"

// This component gets wrapped with a stateful parent.
export default function Calendar({ datesToRender, selectedDate, activeChangeHandler, ...props }) {
  return (
    <CalendarWrapper {...props}>
      {datesToRender.map((date, i) => {
        // If the current iterated date === the active date, then its considered "active" (true).
        const isSelected = date.dateObject.getDate() === selectedDate.value.getDate()

        // When the date child is clicked, set the parent active date to the date of the child.
        return (
          <DayDisplay
            key={i}
            {...date}
            isSelected={isSelected}
            onClick={activeChangeHandler.bind(this, date.dateObject)}
          />
        )
      })}
    </CalendarWrapper>
  )
}

Calendar.propTypes = {
  selectedDate: PropTypes.shape({
    value: PropTypes.instanceOf(Date).isRequired,
    set: PropTypes.func.isRequired
  }).isRequired,
  datesToRender: PropTypes.array.isRequired,
  activeChangeHandler: PropTypes.func.isRequired
}
