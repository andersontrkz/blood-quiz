import React, { useMemo } from 'react';
import { View, Text, Modal } from 'react-native';

import { useAction } from '@/app/hooks/useAction';
import { handleRestartAction } from '@/app/actions/quizActions';
import Button from '@/app/components/Button';
import styles from './RestartModal.styles';
import { COLORS } from '@/constants';
import { useQuiz } from '@/app/hooks/useQuiz';

export default function RestartModal() {
  const { score, showScoreModal, allQuestions } = useQuiz();
  const dispatchHandleRestart = useAction(handleRestartAction);

  const resultData = useMemo(() => {
    if (score === allQuestions.length) {
      return { icon: '🏆', message: 'Parabéns! Você acertou tudo!', color: COLORS.success };
    };

    if (score > allQuestions.length * 0.75) {
      return { icon: '🎉', message: 'Quase lá! Continue assim!', color: COLORS.success };
    };

    if (score > allQuestions.length * 0.5) {
      return { icon: '👍', message: 'Você está no caminho certo!', color: COLORS.black };
    };

    if (score > allQuestions.length * 0.25) {
      return { icon: '📚', message: 'Estude um pouco mais e tente novamente!', color: COLORS.error };
    };

    return { icon: '😞', message: 'Não foi desta vez, mas não desista!', color: COLORS.error };
  }, [score]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showScoreModal}
    >
      <View style={styles.container}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>
            {resultData.icon}
          </Text>
          <Text style={[styles.title, { color: resultData.color }]}>
            {resultData.message}
          </Text>

          <View style={styles.scoreContainer}>
            <Text style={[
              styles.scoreText,
              {
                color: resultData.color
              }
            ]}>
              {score}
            </Text>
            <Text style={styles.totalText}> / {allQuestions.length}</Text>
          </View>

          <Button onPress={dispatchHandleRestart} label="Reiniciar" />
        </View>
      </View>
    </Modal>

  );
}
