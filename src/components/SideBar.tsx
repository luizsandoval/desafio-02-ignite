import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Button } from './Button';

import { Genre } from '../models/genre';

import '../styles/sidebar.scss';

interface SideBarProps {
    selectedGenre: Genre;
    setSelectedGenre(genre: Genre): void;
}

export function SideBar({ selectedGenre, setSelectedGenre }: SideBarProps) {
    const [genres, setGenres] = useState<Genre[]>([]);

    useEffect(() => {
        api.get<Genre[]>('genres').then((response) => {
            setGenres(response.data);
            setSelectedGenre(response.data[0]);
        });
    }, []);

    function handleClickButton(genre: Genre) {
        setSelectedGenre(genre);
    }

    return (
        <nav className='sidebar'>
            <span>
                Watch<p>Me</p>
            </span>

            <div className='buttons-container'>
                {genres.map((genre) => (
                    <Button
                        key={String(genre.id)}
                        title={genre.title}
                        iconName={genre.name}
                        onClick={() => handleClickButton(genre)}
                        selected={selectedGenre.id === genre.id}
                    />
                ))}
            </div>
        </nav>
    );
}
