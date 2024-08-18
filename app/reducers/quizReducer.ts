import { Animated } from "react-native";
import quizData from '@/data/quizData';
import { HANDLE_NEXT_QUESTION, HANDLE_RESTART_QUIZ, HANDLE_TOGGLE_QUESTION, HANDLE_VALIDATE_ANSWER } from "../actions";
import { IQuizState } from '../interfaces/quiz';
import { THandleNextQuestionAction, THandleRestartQuizAction, THandleToggleQuestionAction, THandleValidateAnswerAction } from "../actions/quizActions";
import { shuffledList } from "../utils/list";

const initialState: IQuizState = {
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

const updateProgressBarProgress = (progress: Animated.Value, value: number) => {
  Animated.timing(progress, {
    toValue: value,
    duration: 1000,
    useNativeDriver: false
  }).start();
}

export type TQuizReducerAction = 
| THandleToggleQuestionAction
| THandleNextQuestionAction
| THandleRestartQuizAction
| THandleValidateAnswerAction;

const quizReducer = (state = initialState, action: TQuizReducerAction): IQuizState => {
  switch (action.type) {
  case HANDLE_TOGGLE_QUESTION: {
    const { answer } = action.payload;

    if (state.currentOptionSelected.includes(answer)) {
      const newSelectedOptions = state.currentOptionSelected.filter((selectedOptions) => selectedOptions !== answer);
      return {
        ...state,
        currentOptionSelected: newSelectedOptions,
        showNextButton: !!newSelectedOptions.length,
      }; 
    }

    const newSelectedOptions = [...state.currentOptionSelected, answer];
    return {
      ...state,
      currentOptionSelected: [...state.currentOptionSelected, answer],
      showNextButton: !!newSelectedOptions.length,
    }; 
  }
  case HANDLE_NEXT_QUESTION: {
    updateProgressBarProgress(state.progress, state.currentQuestionIndex + 1);
    const showScoreModal = state.currentQuestionIndex === state.allQuestions.length - 1;
    const currentQuestionIndex = showScoreModal ? state.currentQuestionIndex : state.currentQuestionIndex + 1;

    return {
      ...state,
      currentQuestionIndex,
      currentOptionSelected: [],
      correctOptions: [],
      isOptionsDisabled: false,
      showNextButton: false,
      showScoreModal,
    }; 
  }

  case HANDLE_RESTART_QUIZ: {
    updateProgressBarProgress(state.progress, 0);
    return { ...initialState, allQuestions: shuffledList(quizData) };
  }

  case HANDLE_VALIDATE_ANSWER: {
    const correctOptions = state.allQuestions[state.currentQuestionIndex]['correct_options'];
    const selectedOptions = state.currentOptionSelected;
    const isCorrect = correctOptions.every(option => selectedOptions.includes(option)) && selectedOptions.every(option => correctOptions.includes(option));
    const score = isCorrect ? state.score + 1 : state.score;

    return {
      ...state,
      correctOptions,
      isOptionsDisabled: true,
      showNextButton: true,
      score,
    };
  }

  default:
    return state;
  }
};

export default quizReducer;
