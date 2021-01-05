import { mount, shallow } from "enzyme"
import React from "react"
import { enzymeFind } from "styled-components/test-utils"
import DayDisplay from "./index"
import { Date, Day } from "./style"

describe("<DayDisplay />", () => {
  const day = "Monday".substr(0, 3).toUpperCase()
  const date = 12

  it("renders", () => {
    shallow(<DayDisplay day={day} date={date} />)
  })

  it("renders the day passed", () => {
    const component = mount(<DayDisplay day={day} date={date} />)
    expect(enzymeFind(component, Day).text()).toEqual(day)
  })

  it("renders the date passed", () => {
    const component = mount(<DayDisplay day={day} date={date} />)
    expect(enzymeFind(component, Date).text()).toEqual(date.toString())
  })
})
