import React, { useState } from 'react';
import Button from './Button';
import StatisticLine from './StatisticLine';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const totalFeedback = good + neutral + bad;
  const averageScore = (good - bad) / totalFeedback || 0;
  const positiveFeedbackPercentage = (good / totalFeedback) * 100 || 0;

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text="Good" handleClick={() => setGood(good + 1)} />
      <Button text="Neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="Bad" handleClick={() => setBad(bad + 1)} />

      {totalFeedback === 0 ? (
        <p>No feedback given yet</p>
      ) : (
        <div>
          <h2>Statistics</h2>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="Total" value={totalFeedback} />
          <StatisticLine text="Average score" value={averageScore.toFixed(2)} />
          <StatisticLine text="Positive feedback percentage" value={positiveFeedbackPercentage.toFixed(2) + '%'} />
        </div>
      )}
    </div>
  );
};

export default App;
