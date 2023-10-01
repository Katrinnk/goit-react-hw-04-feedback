export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <ul className="list-group ms-3 me-3">
        <li className="list-group-item" key="good">
          Good: {good}
        </li>
        <li className="list-group-item" key="neutral">
          Neutral: {neutral}
        </li>
        <li className="list-group-item" key="bad">
          Bad: {bad}
        </li>
        <li className="list-group-item" key="total">
          Total: {total}
        </li>
        <li className="list-group-item" key="positivePercentage">
          Positive Feedback: {positivePercentage}%
        </li>
      </ul>
    </>
  );
};
