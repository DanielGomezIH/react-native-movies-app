import { useEffect, useState } from 'react';
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';

import type { Movie } from '../../core/entities';
import * as UseCases from '../../core/use-cases';

export const useMovies = () => {
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const nowPlayingPromise = await UseCases.moviesNowPlayingUseCase(
      movieDBFetcher,
    );

    const popularPromise = await UseCases.moviesPopularUseCase(movieDBFetcher);

    const topRatedPromise = await UseCases.moviesTopRatedUseCase(
      movieDBFetcher,
    );

    const upcomingPromise = await UseCases.moviesUpcomingUseCase(
      movieDBFetcher,
    );

    const [nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies] =
      await Promise.all([
        nowPlayingPromise,
        popularPromise,
        topRatedPromise,
        upcomingPromise,
      ]);

    setNowPlaying(nowPlayingMovies);
    setPopular(popularMovies);
    setTopRated(topRatedMovies);
    setUpcoming(upcomingMovies);

    setIsLoading(false);
  };

  return {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upcoming,
  };
};
