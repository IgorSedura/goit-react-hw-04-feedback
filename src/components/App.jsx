import { useState } from 'react';
import { Feedback } from './Feedback/Feedback';
import { GlobalStyle } from './GlobalStyles';
import { NoFeedback } from './NoFeedback/NoFeedback';
import { Statistics } from './Statistics/Statistics';
import { StatisticTitle } from './StatisticTitle/StatisticTitle';

export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const stateIncrement = e => {
    const options = e.target.innerText;
    setState(prevState => {
      return {
        ...prevState,
        [options.toLowerCase()]: prevState[options.toLowerCase()] + 1,
      };
    });
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((state.good / total) * 100);
  };

  const { good, neutral, bad } = state;
  const total = good + neutral + bad;
  const coutPositive = countPositiveFeedbackPercentage();
  const countPercenage = countPositiveFeedbackPercentage();

  return (
    <div>
      <Feedback stateIncrement={stateIncrement} />
      <GlobalStyle />
      <StatisticTitle />
      {total === 0 ? (
        <NoFeedback />
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          percentage={!isNaN(coutPositive) ? countPercenage : 0}
        />
      )}
    </div>
  );
};
