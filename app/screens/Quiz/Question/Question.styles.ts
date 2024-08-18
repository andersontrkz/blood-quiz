import { StyleSheet } from 'react-native';
import { COLORS } from '@/constants';

const styles = StyleSheet.create({
  container: {
    marginVertical: 0,
    marginTop:32,
  },
  questionCounter: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  questionCounterText: {
    color: COLORS.white,
    fontSize: 20,
    opacity: 0.6,
    marginRight: 2,
    fontFamily: 'Poppins',
  },
  totalQuestionsText: {
    color: COLORS.white,
    fontSize: 18,
    opacity: 0.6,
    fontFamily: 'Poppins',
  },
  questionText: {
    color: COLORS.white,
    fontSize: 26,
    fontFamily: 'Poppins',
  },
});

export default styles;
