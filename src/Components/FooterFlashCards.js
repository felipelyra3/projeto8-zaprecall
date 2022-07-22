import React from 'react';

export default function FooterFlashCards({ count, footerIcons}) {
    const [text, setText] = React.useState('');
    if (count === 8) {
        if (footerIcons === <ion-icon class="wrong md hydrated" name='close-circle'></ion-icon>) {
            setText(text = <div className="">
            <p>😥 Putz!</p>
            <p>Ainda faltam alguns...<br /> Mas não desanime!!</p>
            </div>);
        } else {
            setText(text = <div className="">
            <p>🥳 Parabéns!</p>
            <p>Você não esqueceu de nenhum flashcard!</p>
            </div>);
        }
    }

    return (
        <div className="mobileFooter">
            <p>{count}/8</p>
                {text}
            <p>{footerIcons}</p>
        </div>
    );
}