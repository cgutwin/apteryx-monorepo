import styled from "styled-components"

export const Display = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: max-content;
  cursor: pointer;
  list-style: none;
`

export const Day = styled.h6`
  margin: 0 0 0.5rem 0;
`

export const Date = styled.p`
  align-items: center;
  background: transparent;
  border-radius: 100%;
  border: 2px solid transparent;
  max-height: 1rem;
  margin: 0;
  padding: 1.25rem;
  width: 1rem;
  display: inline-flex;
  justify-content: center;
  font-weight: 600;
`

export const SelectedDate = styled(Date)`
  background: none;
  border: 2px solid #31f58d;
  color: #0d0d1b;
`

export const SelectedDay = styled(Day)`
  color: #31f58d;
`
