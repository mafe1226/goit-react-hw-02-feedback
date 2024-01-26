import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button style={{marginLeft:"10px",}} key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;