import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';

import type { PopularResponse } from '../../../infrastructure/interfaces/movies';
import type { Movie } from '../../entities';

export const moviesPopularUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const popular = await fetcher.get<PopularResponse>(`/popular`);

    return popular.results.map(result =>
      MovieMapper.fromMovieBDResultToEntity(result),
    );
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching movies - Popular');
  }
};
