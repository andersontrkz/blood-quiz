import { type Animated } from "react-native";

interface IQuestion {
    question: string,
    options: string[],
    correct_options: string[],
};

export interface IQuizState {
    allQuestions: IQuestion[];
    currentQuestionIndex: number;
    currentOptionSelected: string[];
    correctOptions: string[];
    isOptionsDisabled: boolean;
    score: number;
    showNextButton: boolean;
    showScoreModal: boolean;
    progress: Animated.Value;
};
