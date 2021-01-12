import PropTypes from "prop-types"
import React from "react"
import { ProgressBar } from "./styles"

export default function FormProgressBar({ progress }) {
  const progressPercent = progress * 100
  return <ProgressBar percent={progressPercent} />
}

FormProgressBar.propTypes = {
  progress: PropTypes.number.isRequired
}
