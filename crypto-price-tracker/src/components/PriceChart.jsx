import { useMemo } from "react"

const PriceChart = ({ data, color }) => {
  const path = useMemo(() => {
    if (!data || data.length === 0) return ""

    const min = Math.min(...data)
    const max = Math.max(...data)
    const range = max - min || 1

    // Normalize data to fit in the SVG
    const normalizedData = data.map((price, index) => {
      const x = (index / (data.length - 1)) * 120
      const y = 40 - ((price - min) / range) * 30
      return `${x},${y}`
    })

    return `M${normalizedData.join(" L")}`
  }, [data])

  return (
    <svg width="100%" height="100%" viewBox="0 0 120 40" preserveAspectRatio="none">
      <path d={path} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default PriceChart
