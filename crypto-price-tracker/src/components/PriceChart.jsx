import { useMemo } from "react"
import PropTypes from "prop-types"

const PriceChart = ({ data = [], color = "#007bff", width = 120, height = 40 }) => {
  const path = useMemo(() => {
    if (!data || data.length === 0) return ""

    const min = Math.min(...data)
    const max = Math.max(...data)
    const range = max - min || 1

    // Normalize data points
    const points = data.map((price, index) => {
      const x = (index / (data.length - 1)) * width
      const y = height - ((price - min) / range) * (height - 10) // top padding of 10px
      return [x, y]
    })

    // Create "M x,y L x,y ..." path
    const pathData = points.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x},${y}`).join(" ")

    return pathData

    // Optional: Use curve instead of straight lines
    // let d = `M${points[0][0]},${points[0][1]}`
    // for (let i = 1; i < points.length; i++) {
    //   const [prevX, prevY] = points[i - 1]
    //   const [currX, currY] = points[i]
    //   const midX = (prevX + currX) / 2
    //   d += ` Q${prevX},${prevY} ${midX},${(prevY + currY) / 2}`
    // }
    // return d
  }, [data, width, height])

  if (!data || data.length === 0) {
    return <div style={{ color: "#999", fontSize: "0.9rem" }}>No data available</div>
  }

  return (
    <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
      <path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

PriceChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}

export default PriceChart
