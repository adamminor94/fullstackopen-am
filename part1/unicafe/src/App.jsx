import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood({good: +good+1})
  const handleNeutral = () => setNeutral({neutral: +neutral+1})
  const handleBad = () => setBad({bad: +bad+1})

  return (
    <div>
      <h1>give feedback</h1>
      <br/>
      <div>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral +1)}>neutral</button>
      <button onClick={() => setBad(bad+1)}>bad</button>
      </div>
      <h1>statistics</h1>
      <br/>
      <div>
        good {good}
        <br/>
        neutral {neutral}
        <br/>
        bad {bad}

      </div>
    </div>
  )
}

export default App