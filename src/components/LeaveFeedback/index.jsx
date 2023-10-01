export const LeaveFeedback = ({ leaveFeedback, options }) => {
  return (
    <>
      {options.map(option => {
        return (
          <button
            type="button"
            key={option}
            className="btn btn-light ms-2"
            onClick={() => leaveFeedback(option)}
          >
            {option}
          </button>
        );
      })}
    </>
  );
};
