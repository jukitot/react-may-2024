import React, {FC, useCallback, useEffect, useMemo, useState} from 'react';
import './App.css';
import Menu from "./components/Menu";
import TonyStark from "./components/TonyStark";
import ColonelMamba from "./components/ColonelMamba";
import IronSuite from "./components/IronSuite";


function App() {

    return (
        <>
            <IronSuite><TonyStark/></IronSuite>
            <IronSuite><ColonelMamba/></IronSuite>

        </>
    );
}

export default App;
