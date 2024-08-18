import { StyleSheet } from 'react-native';
import { COLORS } from '@/constants';

const styles = StyleSheet.create({
  optionButton: {
    borderWidth: 3,
    height: 60,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    flex: 1,
    margin: 8,
  },
  optionText: {
    fontSize: 20,
    color: COLORS.white,
    fontFamily: 'Poppins',
  },
  iconContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: COLORS.white,
    fontSize: 20,
  },
});

export default styles;
