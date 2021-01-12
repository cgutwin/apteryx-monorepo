import PropTypes from "prop-types"
import React, { useContext } from "react"
import { ThemeContext } from "styled-components"
import { DAYS_OF_WEEK } from "../../../utils/constants"
import getDateWithoutTime from "../../../utils/getDateWithoutTime"
import { DateStyle, DateWrapper, DayStyle, SelectedOutline } from "./style"

/**
 * @param {Date} date
 * */
export default function DayDisplay({ date, selected = false, ...props }) {
  const themeContext = useContext(ThemeContext)
  // The date is marked as before today, if the date passed in ms is less than today's date without the time.
  const dateBeforeToday =
    date.getTime() < Date.parse(getDateWithoutTime().toString())

  return (
    <DateWrapper
      dateBeforeToday={dateBeforeToday}
      selected={selected}
      {...props}
    >
      <DayStyle>{DAYS_OF_WEEK[date.getDay()].substr(0, 3)}</DayStyle>
      <DateStyle>
        {selected && (
          <SelectedOutline
            initial={false}
            layoutId="outline"
            animate={{
              borderColor: themeContext.accent,
              scaleX: [null, 1.2, 1]
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut"
            }}
          />
        )}
        <p>{date.getDate()}</p>
      </DateStyle>
    </DateWrapper>
  )
}

DayDisplay.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  selected: PropTypes.bool
}
