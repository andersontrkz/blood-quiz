import React from 'react';
import { Provider } from 'react-redux';
import Quiz from './Quiz';
import store from '@/app/store';

export default function QuizScreen() {
  return (
    <Provider store={store}>
      <Quiz />
    </Provider>
  );
};
