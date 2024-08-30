import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import { DetailsScreen, HomeScreen } from '../screens';

export type RootStackParams = {
  Home: undefined;
  Details: { movieId: number };
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});
