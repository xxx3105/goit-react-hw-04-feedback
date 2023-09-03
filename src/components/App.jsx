import 'modern-normalize';
import React, { useState } from 'react';
import { Layout } from './Layout';
import { Container, Message, TitleOfBlocks } from '../styles/GlobalStyle';
import { FeedbackOptionsComponent } from './FeedbackOptionsComponent/FeedbackOptionsComponent'; // Исправлен импорт
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedbacks = option => {
    if (option === 'good') {
      setGood(prevState => prevState + 1);
    } else if (option === 'neutral') {
      setNeutral(prevState => prevState + 1);
    } else if (option === 'bad') {
      setBad(prevState => prevState + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  return (
    <Layout>
      <Container>
        <TitleOfBlocks>Please leave feedback</TitleOfBlocks>
        <FeedbackOptionsComponent
          options={['good', 'neutral', 'bad']}
          handleFeedbacksHandler={handleFeedbacks}
        />

        <TitleOfBlocks>Statistic</TitleOfBlocks>
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
          />
        ) : (
          <Message>There is no feedback</Message>
        )}
      </Container>
    </Layout>
  );
};
