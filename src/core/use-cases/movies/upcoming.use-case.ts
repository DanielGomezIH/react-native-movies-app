import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';

import type { UpcomingResponse } from '../../../infrastructure/interfaces/movies';
import type { Movie } from '../../entities';

export const moviesUpcomingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const upcoming = await fetcher.get<UpcomingResponse>(`/upcoming`);

    return upcoming.results.map(result =>
      MovieMapper.fromMovieBDResultToEntity(result),
    );
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching movies - Upcoming');
  }
};
