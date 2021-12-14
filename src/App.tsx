import { useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import { Genre } from './models/genre';

import './styles/global.scss';

export function App() {
    const [selectedGenre, setSelectedGenre] = useState<Genre>({} as Genre);

    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <SideBar
                selectedGenre={selectedGenre}
                setSelectedGenre={setSelectedGenre}
            />

            <Content selectedGenre={selectedGenre} />
        </div>
    );
}
