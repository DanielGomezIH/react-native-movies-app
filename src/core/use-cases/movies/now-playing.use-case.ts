import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';

import type { NowPlayingResponse } from '../../../infrastructure/interfaces/movies';
import type { Movie } from '../../entities';

export const moviesNowPlayingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const nowPlaying = await fetcher.get<NowPlayingResponse>(`/now_playing`);

    return nowPlaying.results.map(result =>
      MovieMapper.fromMovieBDResultToEntity(result),
    );
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching movies - NowPlaying');
  }
};
