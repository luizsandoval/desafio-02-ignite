import { Genre } from '../models/genre';

interface HeaderProps {
    selectedGenre: Genre;
}

export function Header({ selectedGenre }: HeaderProps) {
    return (
        <header>
            <span className='category'>
                Categoria:<span> {selectedGenre?.title}</span>
            </span>
        </header>
    );
}
