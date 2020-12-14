import { shallow } from "enzyme"
import Calendar from "packages/kiwi-ui/src/LinearCalendar/Calendar/index"
import DayDisplay from "packages/kiwi-ui/src/LinearCalendar/DayDisplay"
import React from "react"
import sinon from "sinon"
import { generateDatesList } from "../../../utils"

describe("<Calendar/>", () => {
  const datesToRender = generateDatesList()
  const activeDate = new Date(Date.now()).getDate()

  it("renders", function () {
    shallow(<Calendar datesToRender={datesToRender} activeDate={activeDate} activeChangeHandler={() => null} />)
  })

  it("renders n number of <DayDisplay /> components", () => {
    const calendar = shallow(
      <Calendar datesToRender={datesToRender} activeDate={activeDate} activeChangeHandler={() => null} />
    )
    expect(calendar.find(DayDisplay)).toHaveLength(datesToRender.length)
  })

  it("changes the active date when a <DayDisplay /> is clicked", () => {
    const handleActiveChange = sinon.spy()
    const component = shallow(
      <Calendar datesToRender={datesToRender} activeDate={activeDate} activeChangeHandler={handleActiveChange} />
    )
    component.find(DayDisplay).last().simulate("click")
    expect(handleActiveChange).toHaveProperty("called")
  })
})
