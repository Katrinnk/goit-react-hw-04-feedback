import { useState } from 'react';
import { Statistics } from './ StatisticsFeedback';
import { LeaveFeedback } from './LeaveFeedback';
import { Notification } from './Notification';
import { Section } from './Section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = key => {
    switch (key) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        return;
    }
  };

  const getTotalFeedback = () => {
    return good + neutral + bad;
  };

  const getPositiveFeedback = () => {
    const total = getTotalFeedback();
    return good / total;
  };

  const totalFeedback = getTotalFeedback();
  const positiveFeedback = getPositiveFeedback();

  return (
    <>
      <Section title="Please leave feedback">
        <LeaveFeedback
          leaveFeedback={onLeaveFeedback}
          options={['good', 'neutral', 'bad']}
        />
      </Section>
      {!totalFeedback ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedback}
          />
        </Section>
      )}
    </>
  );
};
