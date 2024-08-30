import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';

import type { TopRatedResponse } from '../../../infrastructure/interfaces/movies';
import type { Movie } from '../../entities';

export const moviesTopRatedUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const topRated = await fetcher.get<TopRatedResponse>(`/top_rated`);

    return topRated.results.map(result =>
      MovieMapper.fromMovieBDResultToEntity(result),
    );
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching movies - TopRated');
  }
};
