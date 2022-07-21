import React from 'react';
import Screen2FlashCards from './Screen2FlashCards';

export default function Screen1Welcome({screen, setScreen}) {


    return (
        <div className="mobile">
            <img src="./Assets/image 1.png" alt="ZapRecall" />
            <div className="appName"><p>ZapRecall</p></div>
            <div className="buttonStart" onClick={() => {setScreen(!screen)}}>Iniciar Recall</div> 
        </div>
    );
}