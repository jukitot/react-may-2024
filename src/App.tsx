import React from 'react';

import './App.css';
import Character from "./components/character/Character";
import Users from "./components/users/Users";

function App() {
    return (
        <div>
            <Character
                name={'Self-Congratulatory Jerry'}
                type={'Mytholog'}
                gender={'Male'}
                status={'unknown'}
                img={'https://rickandmortyapi.com/api/character/avatar/310.jpeg'}>
                <p>Info about this Character</p>
            </Character>

            <Character
                name={'Fido'}
                type={'Dog'}
                gender={'Male'}
                status={'Alive'}
                img={'https://rickandmortyapi.com/api/character/avatar/397.jpeg'}>
                <p>Info about this Character</p>
            </Character>

            <Users/>
        </div>
    );
}

export default App;
