import React from 'react';
import { ButtonsStyle } from './FeedbackOptionsComponent.styled';

export const FeedbackOptionsComponent = ({
  handleFeedbacksHandler,
  currentValue,
}) => {
  const options = ['good', 'neutral', 'bad'];

  return (
    <div>
      {options.map((option, index) => (
        <ButtonsStyle
          key={index}
          onClick={() => handleFeedbacksHandler(option)}
        >
          {option}
        </ButtonsStyle>
      ))}
    </div>
  );
};
