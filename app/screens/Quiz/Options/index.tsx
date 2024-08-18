import React from 'react';
import { FlatList } from 'react-native';
import Option from './Option/Option';
import { useQuiz } from '@/app/hooks/useQuiz';

export default function Options() {
  const { currentQuestionIndex, allQuestions } = useQuiz();

  const renderItem = ({ item }: { item: string }) => (
    <Option option={item}
    />
  );

  return (
    <FlatList
      data={allQuestions[currentQuestionIndex]?.options || []}
      renderItem={renderItem}
      keyExtractor={(item) => item}
      numColumns={2}
    />
  );
};
