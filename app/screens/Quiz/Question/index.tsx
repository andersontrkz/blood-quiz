import React from 'react';
import { View, Text } from 'react-native';
import styles from './Question.styles';
import { useQuiz } from '@/app/hooks/useQuiz';

export default function Question() {
  const { currentQuestionIndex, allQuestions } = useQuiz();

  return (
    <View style={styles.container}>
      <View style={styles.questionCounter}>
        <Text style={styles.questionCounterText}>{currentQuestionIndex + 1}</Text>
        <Text style={styles.totalQuestionsText}>/ {allQuestions.length}</Text>
      </View>

      <Text style={styles.questionText}>{allQuestions[currentQuestionIndex]?.question}</Text>
    </View>
  );
}
