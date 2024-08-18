import { StyleSheet } from 'react-native';
import { COLORS } from '@/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: COLORS.white,
    width: '90%',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontFamily: 'PoppinsBold',
    textAlign: 'center',
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 20,
  },
  scoreText: {
    fontSize: 30,
    fontFamily: 'Poppins',
  },
  totalText: {
    fontSize: 20,
    color: COLORS.black,
    fontFamily: 'Poppins',
  },
});

export default styles;
