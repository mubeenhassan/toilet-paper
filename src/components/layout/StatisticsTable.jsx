import { render } from "react-dom"
import React, { useState } from "react"

const StatisticsTable = ({ TableData }) => {
  const [count, setCount] = useState(8)
  function sortJSON(arr, key, way) {
    return arr.sort(function(a, b) {
      var x = a[key]
      var y = b[key]
      if (way === "123") {
        return x < y ? -1 : x > y ? 1 : 0
      }
      if (way === "321") {
        return x > y ? -1 : x < y ? 1 : 0
      }
    })
  }
  let people2 = sortJSON(TableData, "place", "321") // 123 or 321

  console.log(people2)
  return<div className="Rtable">
    <p>Global scoreboard</p>
   {people2.slice(0, count).map((item, key) => {
    return (
      <div className="t-row">
        <span>{key + 1}.</span>
        <span>{item.username}</span>
        <span>{item.place} Quad</span>
      </div>
      
    )
  })}
  </div>
}

export default StatisticsTable
