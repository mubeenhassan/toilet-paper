import { useState, useEffect } from "react"
import StatisticTable from "../layout/StatisticsTable"

export function GlobalRanking() {
  const [items, setItems] = useState([])
  const [error, setError] = useState([])

  useEffect(() => {
    fetch(
      "https://toiletpapertycoon.com:8080/paperAmountSurvey/ranking?limit=99"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result)
        },
        (error) => {
          setError(error)
        }
      )
  }, [])
  const TableData = items.data && items.data.ranking
  return (<div className="table-container">
    {TableData && TableData.length > 0 && (
        <StatisticTable TableData={TableData} />
      )}
    </div>
  )
}

export function GlobalStatistics() {
  return <div></div>
}
