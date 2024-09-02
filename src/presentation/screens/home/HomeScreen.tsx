import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMovies } from '../../hooks';
import { PosterCarousel } from '../../components';

export const HomeScreen = () => {
  const { top, bottom } = useSafeAreaInsets();

  const { isLoading, nowPlaying } = useMovies();

  if (isLoading) {
    return <Text>Loading</Text>;
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 10, paddingBottom: bottom + 10 }}>
        <PosterCarousel movies={nowPlaying} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
  },
});
