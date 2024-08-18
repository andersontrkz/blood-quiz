import React, { useMemo, } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Option.styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { handleToggleOption } from '@/app/actions/quizActions';
import { useAction } from '@/app/hooks/useAction';
import { COLORS } from '@/constants';
import { useQuiz } from '@/app/hooks/useQuiz';

type OptionsProps = {
    option: string;
};

export default function Option({ option }: OptionsProps) {
  const {
    correctOptions,
    currentOptionSelected,
    isOptionsDisabled,
  } = useQuiz();

  const dispatchToggle = useAction(handleToggleOption);

  const { backgroundColor, borderColor, icon } = useMemo(() => {
    const isSelected = currentOptionSelected.includes(option);
    const isCorrect = correctOptions.includes(option);

    if (isOptionsDisabled) {
      if (isSelected) {
        return {
          backgroundColor: isCorrect ? COLORS.success + '20' : COLORS.error + '20',
          borderColor: isCorrect ? COLORS.success : COLORS.error,
          icon: (
            <MaterialCommunityIcons 
              name={isCorrect ? "check" : "close"} 
              style={styles.icon} 
            />
          ),
        };
      }
    
      if (isCorrect) {
        return {
          backgroundColor: COLORS.error + '20',
          borderColor: COLORS.error,
          icon: null,
        };
      }
    }
    
    return {
      backgroundColor: isSelected ? COLORS.white + '20' : COLORS.white + '20',
      borderColor: isSelected ? COLORS.white : COLORS.white + '40',
      icon: null,
    };
  }, [option, currentOptionSelected, correctOptions, isOptionsDisabled]);

  return (
    <TouchableOpacity
      onPress={() => dispatchToggle(option)}
      disabled={isOptionsDisabled}
      key={option}
      style={[
        styles.optionButton,
        {
          borderColor,
          backgroundColor,
        },
      ]}
    >
      <Text style={styles.optionText}>{option}</Text>
          
      <View style={styles.iconContainer}>
        {icon}
      </View>
    </TouchableOpacity>
  );
}
