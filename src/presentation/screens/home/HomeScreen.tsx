import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useMovies } from '../../hooks';

export const HomeScreen = () => {
  const { nowPlaying, popular, topRated, upcoming } = useMovies();

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>NOW PLAYING</Text>

      <FlatList
        data={nowPlaying}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />

      <Text style={styles.title}>POPULAR</Text>
      <FlatList
        data={popular}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />

      <Text style={styles.title}>TOP RATED</Text>
      <FlatList
        data={topRated}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />

      <Text style={styles.title}>UPCOMING</Text>
      <FlatList
        data={upcoming}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
  },
});
