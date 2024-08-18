import { StyleSheet } from 'react-native';
import { COLORS } from '@/constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 16,
    borderRadius: 50,
    backgroundColor: '#FFFFFF11',
  },
  progress: {
    height: 16,
    borderRadius: 50,
    backgroundColor: COLORS.primary,
  },
});

export default styles;
