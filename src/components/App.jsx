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

// class App extends Component {
//   state = { good: 0, neutral: 0, bad: 0 };

//   onLeaveFeedback = key => {
//     this.setState(prev => {
//       return { [key]: prev[key] + 1 };
//     });
//   };
//   getTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   getPositiveFeedback = () => {
//     const { good } = this.state;
//     const total = this.getTotalFeedback();
//     return good / total;
//   };

//   render() {
//     const totalFeedback = this.getTotalFeedback();
//     const positiveFeedback = this.getPositiveFeedback();
//     return (
//       <>
//         <Section title="Please leave feedback">
//           <LeaveFeedback
//             leaveFeedback={this.onLeaveFeedback}
//             options={Object.keys(this.state)}
//           />
//         </Section>
//         {!totalFeedback ? (
//           <Notification message="There is no feedback" />
//         ) : (
//           <Section title="Statistics">
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={totalFeedback}
//               positivePercentage={positiveFeedback}
//             />
//           </Section>
//         )}
//       </>
//     );
//   }
// }

// export default App;
