import {
  handleToggleOption,
  handleNextAction,
  handleRestartAction,
  handleValidateAction,
  THandleToggleQuestionAction,
  THandleNextQuestionAction,
  THandleRestartQuizAction,
  THandleValidateAnswerAction,
} from '@/app/actions/quizActions';

import {
  HANDLE_NEXT_QUESTION,
  HANDLE_RESTART_QUIZ,
  HANDLE_TOGGLE_QUESTION,
  HANDLE_VALIDATE_ANSWER,
} from '@/app/actions';
  
describe('Quiz Actions', () => {
  it('should create an action to toggle a question option', () => {
    const answer = 'A';

    const expectedAction: THandleToggleQuestionAction = {
      type: HANDLE_TOGGLE_QUESTION,
      payload: { answer },
    };

    expect(handleToggleOption(answer)).toEqual(expectedAction);
  });
  
  it('should create an action to move to the next question', () => {
    const expectedAction: THandleNextQuestionAction = {
      type: HANDLE_NEXT_QUESTION,
    };

    expect(handleNextAction()).toEqual(expectedAction);
  });
  
  it('should create an action to restart the quiz', () => {
    const expectedAction: THandleRestartQuizAction = {
      type: HANDLE_RESTART_QUIZ,
    };

    expect(handleRestartAction()).toEqual(expectedAction);
  });
  
  it('should create an action to validate the current answer', () => {
    const expectedAction: THandleValidateAnswerAction = {
      type: HANDLE_VALIDATE_ANSWER,
    };

    expect(handleValidateAction()).toEqual(expectedAction);
  });
});
  