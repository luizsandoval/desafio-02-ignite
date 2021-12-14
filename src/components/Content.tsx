import { useEffect, useState } from 'react';

import { api } from '../services/api';

import { Header } from './Header';
import { MovieCard } from './MovieCard';

import { Genre } from '../models/genre';

import '../styles/content.scss';

interface MovieProps {
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
        Source: string;
        Value: string;
    }>;
    Runtime: string;
}

interface ContentProps {
    selectedGenre: Genre;
}

export function Content({ selectedGenre }: ContentProps) {
    const [movies, setMovies] = useState<MovieProps[]>([]);

    useEffect(() => {
        if (selectedGenre?.id)
            api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenre?.id}`).then(
                (response) => {
                    setMovies(response.data);
                }
            );
    }, [selectedGenre?.id]);

    return (
        <div className='container'>
            <Header selectedGenre={selectedGenre} />

            <main>
                <div className='movies-list'>
                    {movies.map((movie) => (
                        <MovieCard
                            key={movie.imdbID}
                            title={movie.Title}
                            poster={movie.Poster}
                            runtime={movie.Runtime}
                            rating={movie.Ratings[0].Value}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}
