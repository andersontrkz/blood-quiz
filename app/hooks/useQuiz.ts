import { createSelector } from 'reselect';
import { IQuizState } from '@/app/interfaces/quiz';
import { useSelector } from 'react-redux';

const selectQuizState = (state: IQuizState) => state;

const selectQuiz = createSelector(
  [selectQuizState],
  ({ 
    allQuestions,
    currentQuestionIndex,
    currentOptionSelected,
    correctOptions,
    isOptionsDisabled,
    score,
    showNextButton,
    showScoreModal,
    progress,
  }) => ({
    allQuestions,
    currentQuestionIndex,
    currentOptionSelected,
    correctOptions,
    isOptionsDisabled,
    score,
    showNextButton,
    showScoreModal,
    progress,
  })
);

export function useQuiz() {
  return useSelector((state: IQuizState) => selectQuiz(state));
};
