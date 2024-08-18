import { COLORS } from '@/constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 16,
    flexDirection: 'column',
    backgroundColor: COLORS.black,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    position: 'relative',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 24,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: COLORS.white
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: COLORS.white
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
    color: COLORS.white
  },
});

export default styles;
