import { HANDLE_NEXT_QUESTION, HANDLE_RESTART_QUIZ, HANDLE_TOGGLE_QUESTION, HANDLE_VALIDATE_ANSWER } from ".";

export const handleToggleOption = (answer: string): THandleToggleQuestionAction => ({
  type: HANDLE_TOGGLE_QUESTION,
  payload: { answer },
});

export const handleNextAction = (): THandleNextQuestionAction => ({
  type: HANDLE_NEXT_QUESTION,
});

export const handleRestartAction = (): THandleRestartQuizAction => ({
  type: HANDLE_RESTART_QUIZ,
});

export const handleValidateAction = (): THandleValidateAnswerAction => ({
  type: HANDLE_VALIDATE_ANSWER,
});

export type THandleToggleQuestionAction = { type: typeof HANDLE_TOGGLE_QUESTION, payload: { answer: string }  };
export type THandleNextQuestionAction = { type: typeof HANDLE_NEXT_QUESTION };
export type THandleRestartQuizAction = { type: typeof HANDLE_RESTART_QUIZ };
export type THandleValidateAnswerAction = { type: typeof HANDLE_VALIDATE_ANSWER };
