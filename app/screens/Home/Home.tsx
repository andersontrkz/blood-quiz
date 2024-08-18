import React from 'react';
import { Text, SafeAreaView, Image, StatusBar } from 'react-native';
import styles from './Home.styles';
import logoImage from '@/assets/images/logo.gif';
import Button from '@/app/components/Button';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" hidden />

      <Image source={logoImage} style={styles.logo} />

      <Text style={styles.title}>Blood Quiz</Text>

      <Text style={styles.subtitle}>
        Pronto para testar seu conhecimento e mergulhar no universo dos tipos sanguíneos? 💉🩸
      </Text>

      <Button onPress={() => router.push('/screens/Quiz')} label="Iniciar" />
    </SafeAreaView>
  );
}
