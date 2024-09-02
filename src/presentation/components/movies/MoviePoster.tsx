import { Image, Pressable, StyleSheet, View } from 'react-native';
import { Movie } from '../../../core/entities';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../navigation';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <Pressable
      onPress={() => navigation.navigate('Details', { movieId: movie.id })}
      style={({ pressed }) => ({
        width,
        height,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingBottom: 20,
        opacity: pressed ? 0.9 : 1,
      })}>
      <View style={{ ...styles.imageContainer, width, height }}>
        <Image source={{ uri: movie.poster }} style={styles.image} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      height: 10,
      width: 0,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
  },
  image: {
    flex: 1,
    borderRadius: 18,
  },
});
