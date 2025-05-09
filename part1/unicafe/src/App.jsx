import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [all, setAll] = useState([])

  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGood = () => {
    setAll(all.concat(1))
    setGood(+good + 1)
    computeAverageAndPositive()

  }
  const handleNeutral = () => {
    setAll(all.concat(0))
    setNeutral(+neutral + 1)
    computeAverageAndPositive()
  }
  const handleBad = () => {
    setAll(all.concat(-1))
    setBad(+bad + 1)
    computeAverageAndPositive()
  }
  const computeAverageAndPositive = () => {
    let sum = 0;
    all.forEach( num => {
      sum+=num
    })
    setAverage(+sum / all.length)
    setPositive(all.filter(num => +num === 1).length / all.length)

  }

  return (
    <div>
      <h1>give feedback</h1>
      <br />
      <div>
        <button onClick={handleGood}>good</button>
        <button onClick={handleNeutral}>neutral</button>
        <button onClick={handleBad}>bad</button>
      </div>
      <h1>statistics</h1>
      <br />
      <div>
        good {good}
        <br />
        neutral {neutral}
        <br />
        bad {bad}
        <br />
        average {average}
        <br/>
        positive {positive}

      </div>
    </div>
  )
}

export default App