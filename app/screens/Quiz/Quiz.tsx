import React from 'react'
import { View, SafeAreaView, ImageBackground, StatusBar } from 'react-native'

import ProgressBar from '@/app/components/ProgressBar';
import Options from './Options';
import Question from './Question';
import RestartModal from './RestartModal';
import styles from './Quiz.styles';
import { useAction } from '@/app/hooks/useAction';
import { handleNextAction, handleValidateAction } from '@/app/actions/quizActions';
import Button from '@/app/components/Button';
import backgroundImage from '@/assets/images/background.gif';
import { useQuiz } from '@/app/hooks/useQuiz';

export default function Quiz(){
  const { progress, showNextButton, isOptionsDisabled, allQuestions, currentQuestionIndex } = 
  useQuiz();

  const dispatchHandleNext = useAction(handleNextAction);
  const dispatchHandleValidate = useAction(handleValidateAction);

  const isLastQuestion = currentQuestionIndex === allQuestions.length - 1;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" hidden />
  
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>

        <View style={styles.content}>
          <View>
            <ProgressBar progress={progress} totalSteps={allQuestions.length} />
            <Question />
          </View>

          <View>
            <Options />
          </View>

          <View style={styles.buttonContainer}>
            {showNextButton && !isOptionsDisabled && (
              <Button onPress={dispatchHandleValidate} label="Confirmar" />
            )}
            {showNextButton && isOptionsDisabled && (
              <Button onPress={dispatchHandleNext} label={isLastQuestion ? 'Finalizar' : 'Próxima' } />
            )}
          </View>
          <RestartModal />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
