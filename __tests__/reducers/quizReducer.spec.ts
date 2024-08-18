import { Animated } from 'react-native';

import quizData from '@/data/quizData';
import { shuffledList } from '@/app/utils/list';
import { IQuizState } from '@/app/interfaces/quiz';
import quizReducer, { TQuizReducerAction } from '@/app/reducers/quizReducer';
import { HANDLE_NEXT_QUESTION, HANDLE_RESTART_QUIZ, HANDLE_TOGGLE_QUESTION, HANDLE_VALIDATE_ANSWER } from '@/app/actions';

describe('quizReducer', () => {
  let initialState: IQuizState;

  beforeEach(() => {
    initialState = {
      allQuestions: shuffledList(quizData),
      currentQuestionIndex: 0,
      currentOptionSelected: [],
      correctOptions: [],
      isOptionsDisabled: false,
      score: 0,
      showNextButton: false,
      showScoreModal: false,
      progress: new Animated.Value(0),
    };
  });

  it('should handle HANDLE_TOGGLE_QUESTION add action', () => {
    const action: TQuizReducerAction = {
      type: HANDLE_TOGGLE_QUESTION,
      payload: { answer: 'A' }
    };

    const newState = quizReducer(initialState, action);
    expect(newState.currentOptionSelected).toContain('A');
    expect(newState.showNextButton).toBe(true);
  });

  it('should handle HANDLE_TOGGLE_QUESTION remove action', () => {
    const action: TQuizReducerAction = {
      type: HANDLE_TOGGLE_QUESTION,
      payload: { answer: 'A' }
    };

    let newState = quizReducer(initialState, action);
    expect(newState.currentOptionSelected).toContain('A');
    expect(newState.showNextButton).toBe(true);

    action.payload.answer = 'A';
    newState = quizReducer(newState, action);
    expect(newState.currentOptionSelected).not.toContain('A');
    expect(newState.showNextButton).toBe(false);
  });

  it('should handle HANDLE_NEXT_QUESTION action', () => {
    const action: TQuizReducerAction = {
      type: HANDLE_NEXT_QUESTION
    };

    const newState = quizReducer(initialState, action);
    expect(newState.currentQuestionIndex).toBe(1);
    expect(newState.currentOptionSelected).toEqual([]);
    expect(newState.correctOptions).toEqual([]);
    expect(newState.isOptionsDisabled).toBe(false);
    expect(newState.showNextButton).toBe(false);
    expect(newState.showScoreModal).toBe(false);
  });

  it('should handle HANDLE_RESTART_QUIZ action', () => {
    const action: TQuizReducerAction = {
      type: HANDLE_RESTART_QUIZ
    };

    const newState = quizReducer(initialState, action);
    expect(newState.correctOptions).toEqual(initialState.correctOptions);
    expect(newState.currentOptionSelected).toEqual(initialState.currentOptionSelected);
    expect(newState.currentQuestionIndex).toEqual(initialState.currentQuestionIndex);
    expect(newState.isOptionsDisabled).toEqual(initialState.isOptionsDisabled);
    expect(newState.score).toEqual(initialState.score);
    expect(newState.showNextButton).toEqual(initialState.showNextButton);
    expect(newState.showScoreModal).toEqual(initialState.showScoreModal);
    expect(newState.allQuestions).not.toEqual(initialState.allQuestions);
  });

  it('should handle HANDLE_VALIDATE_ANSWER action', () => {
    const action: TQuizReducerAction = {
      type: HANDLE_VALIDATE_ANSWER
    };

    const newState = quizReducer(initialState, action);
    expect(newState.isOptionsDisabled).toBe(true);
    expect(newState.showNextButton).toBe(true);
  });
});
