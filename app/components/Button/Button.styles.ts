import { StyleSheet } from 'react-native';
import { COLORS } from "@/constants";

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    width: '100%',
    backgroundColor: COLORS.primary,
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: COLORS.white,
    textAlign: 'center',
    fontFamily: 'Poppins',
  },
});

export default styles;
