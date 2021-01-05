import React from "react"
import DayDisplay from "./index"

export default {
  title: "Components/LinearCalendar/DayDisplay",
  component: DayDisplay
}

const Template = (args) => <DayDisplay {...args} />

export const Display = Template.bind({})
Display.args = { date: 12, day: "MON" }

export const Selected = Template.bind({})
Selected.args = { date: 12, day: "MON", isSelected: true }
