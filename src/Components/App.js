import React from 'react';
import Screen2FlashCards from "./Screen2FlashCards";
import Screen1Welcome from './Screen1Welcome';
import Test from './Test';

export default function App() {
    const [screen, setScreen] = React.useState(true);
    return (
        <div className="page">
            {screen ? <Screen1Welcome screen={screen} setScreen={setScreen} /> : <Screen2FlashCards />}
            {/* <Screen2FlashCards /> */}
        </div>
    );
}