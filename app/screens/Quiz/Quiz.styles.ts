import { COLORS } from '@/constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    paddingBottom: 40,
    paddingHorizontal: 16,
    backgroundColor: COLORS.background,
    position: 'relative',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  buttonContainer: {
    minHeight: 100,
    justifyContent: 'center',
  },
});

export default styles;
