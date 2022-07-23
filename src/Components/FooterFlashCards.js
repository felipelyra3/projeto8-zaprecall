import React from 'react';

export default function FooterFlashCards({ count, footerIcons, flag}) {
    let text = '';
    if (count === 8) {
        if (flag > 0) {
            text = <div className="">
            <p>😥 Putz!</p>
            <p>Ainda faltam alguns...<br /> Mas não desanime!!</p>
            </div>
        } else {
            text = <div className="">
            <p>🥳 Parabéns!</p>
            <p>Você não esqueceu de nenhum flashcard!</p>
            </div>
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