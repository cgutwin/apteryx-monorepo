import Typography from "typography"

export default new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.666,
  blockMarginBottom: 0,
  headerFontFamily: ["Manrope", "sans-serif"],
  bodyFontFamily: ["Inter", "sans-serif"],
  scaleRatio: 2,
  overrideStyles: ({ adjustFontSizeTo, rhythm, scale }, options, styles) => ({
    h1: {
      ...scale(5 / 5),
      fontSize: "clamp(1.5rem, 8vw, 2rem)",
      fontWeight: 700
    },
    h2: {
      ...scale(4 / 5)
    },
    h3: {
      ...scale(3 / 5)
    },
    h4: {
      ...scale(2 / 5)
    },
    h5: {
      ...scale(1 / 5),
      fontWeight: 700
    },
    h6: {
      ...scale(0 / 5),
      margin: rhythm(1 / 5),
      fontWeight: 500
    },
    p: {
      ...scale(0 / 5),
      fontFamily: "Inter, sans-serif"
    },
    label: {
      ...scale(-0.5 / 5),
      fontFamily: "Manrope, sans-serif",
      fontWeight: "600",
      textTransform: "uppercase"
    }
  })
})
