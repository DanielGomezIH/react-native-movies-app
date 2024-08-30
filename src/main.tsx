import '../gesture-handler'; // Don't move

import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './presentation/navigation';
import { StyleSheet } from 'react-native';

export const Main = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});
