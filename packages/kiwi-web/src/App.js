import { Redirect, Router } from "@reach/router"
import Cookies from "js-cookie"
import React, { Suspense, useEffect, useState } from "react"
import { ThemeProvider } from "styled-components"
import DateContext from "./context/DateContext"
import { GlobalStyles } from "./styles/global"
import { dark, light } from "./themes"
import getDateWithoutTime from "./utils/getDateWithoutTime"

// Lazy load pages.
const ExpiringRouter = React.lazy(() => import("./pages/Expiring"))
const Scan = React.lazy(() => import("./pages/Scan"))

/**
 * The main App file handles global context, including theming, and which date is active for the expiring products.
 * It injects the global styles handled by styled-components, and provides the base router for higher level paths.
 * These paths are lazy-loaded and suspended.
 * */
export default function App() {
  const [theme, setTheme] = useState("light")
  const [selectedDate, setSelectedDate] = useState(getDateWithoutTime())
  /**
   * @function onChangeSelectedDate
   * onChangeSelectedDate will only update the selectedDate if the incoming date is different than the old one. This
   * removes re-renders when clicking on an already active date.
   *
   * @param {Date} date - The date to change the state selectedDate to.
   * */
  const onChangeSelectedDate = (date) =>
    date.getTime() !== selectedDate.getTime() ? setSelectedDate(date) : null
  /**
   * @function handleThemeChange
   * Sets the global theme of the app. If there is no theme parameter passed, it just toggles between light and dark.
   *
   * @param {string} theme - The theme to set.
   */
  const handleThemeChange = (theme) => {
    if (theme) setTheme(theme)
    else setTheme((prevState) => (prevState === "light" ? "dark" : "light"))
  }

  // Load and set the theme cookie when the page loads.
  useEffect(() => {
    if (Cookies.get("theme")) setTheme(Cookies.get("theme"))
  }, [])

  // When the theme state changes, update the theme cookie.
  useEffect(() => {
    Cookies.set("theme", theme, {
      sameSite: "strict",
      secure: true,
      expires: 30
    })
  }, [theme])

  return (
    <>
      <ThemeProvider theme={theme === "light" ? light : dark}>
        <GlobalStyles />
        <DateContext.Provider
          value={{
            selectedDate,
            setSelectedDate: onChangeSelectedDate
          }}
        >
          <Suspense fallback={<div>loading</div>}>
            <Router basepath={process.env.PUBLIC_PATH.slice(0, -1)}>
              <Redirect from="/" to="/expiring" />
              <ExpiringRouter
                path="/expiring/*"
                changeTheme={handleThemeChange}
              />
              <Scan path="/scan" />
            </Router>
          </Suspense>
        </DateContext.Provider>
      </ThemeProvider>
    </>
  )
}
