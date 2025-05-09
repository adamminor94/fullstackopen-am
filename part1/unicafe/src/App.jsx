import { useState } from 'react'

const Statistics = props => {
  if (props.all.length === 0) {
    return(<div>No feedback Given</div>)
  }
  return (
  <table>
    <tbody>
      <StatisticsLine text="good" num={props.good}/>
      <StatisticsLine text="neutral" num={props.neutral}/>
      <StatisticsLine text="bad" num={props.bad}/>
      <StatisticsLine text="all" num={props.all.length}/>
      <StatisticsLine text="average" num={props.average}/>
      <StatisticsLine text="positive" num={props.positive}/>
      </tbody>
  </table>
)
}

const StatisticsLine = props => (
  <tr><td>{props.text}</td><td>{props.num}</td></tr>
)

const Button = props => (
  <button onClick={props.handle}>{props.text}</button>
)


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState([])
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGood = () => {
    const newAll = all.concat(1)
    setAll(newAll)
    setGood(+good + 1)
    setAverage(getAverage(newAll))
    setPositive(getPositive(newAll))

  }
  const handleNeutral = () => {
    const newAll = all.concat(0)
    setAll(newAll)
    setNeutral(+neutral + 1)
    setAverage(getAverage(newAll))
    setPositive(getPositive(newAll))
  }
  const handleBad = () => {
    const newAll = all.concat(-1)
    setAll(newAll)
    setBad(+bad + 1)
    setAverage(getAverage(newAll))
    setPositive(getPositive(newAll))
  }

  function getAverage(all) {
    console.log(all)
    let sum = 0;
    all.forEach(num => {
      sum += num
    })
    return (+sum / all.length)
  }
  function getPositive(all) {
    console.log(all)
    let sum = 0;
    all.forEach(num => {
      sum += num
    })
    return (all.filter(num => +num === 1).length / all.length)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <br />
      <div>
        <Button handle={handleGood} text="good"/>
        <Button handle={handleNeutral} text="neutral"/>
        <Button handle={handleBad} text="bad"/>
      </div>
      <h1>statistics</h1>
      <br />
      <Statistics good={good} neutral={neutral} bad={bad}
        all={all} average={average} positive={positive}></Statistics>
    </div>
  )
}



export default App