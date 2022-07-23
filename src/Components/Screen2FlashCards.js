import React from 'react';
import FooterFlashCards from "./FooterFlashCards";
import HeaderFlashCards from "./HeaderFlashCards"

function FlashCardSwitch({ index, question, answer, answered, setAnswered, count, setCount, footerIcons, setFooterIcons, setFlag }) {
    const [cardState, setCardState] = React.useState('start');
    const [icon, setIcon] = React.useState('');

    if (cardState === 'start') {
        return <NumberedQuestions index={index} setCardState={setCardState} />
    } else if (cardState === 'question') {
        return <FlashCardsQuestions setCardState={setCardState} question={question} />
    } else if (cardState === 'answer') {
        return <FlashCardsAnswers answer={answer} setCardState={setCardState} setAnswered={setAnswered} setIcon={setIcon} count={count} setCount={setCount} footerIcons={footerIcons} setFooterIcons={setFooterIcons} setFlag={setFlag} />
    } else if (cardState === 'answered') {
        return <FlashCardsAnswered index={index} answered={answered} icon={icon}  />
    }
}

function NumberedQuestions({ index, setCardState }) {
    return (
        <div className="flashCardsQuestions" onClick={() => { setCardState('question') }}>
            <p>Pergunta {index}</p>
            <ion-icon name="play-outline"></ion-icon>
        </div>
    );
}

function FlashCardsQuestions({ question, setCardState }) {
    return (
        <div className="flashCardsQuestions" onClick={() => { setCardState('answer') }}>
            <p>{question}</p>
            {/* AQUI TEM O ÍCONE DE FLIP */}
        </div>
    );
}

function FlashCardsAnswers({ answer, setCardState, setAnswered, setIcon, count, setCount, footerIcons, setFooterIcons, setFlag}) {
    return (
        <div className="flashCardsQuestions">
            <p>{answer}</p>
            <div className='answerIcons'>
                <div className='naoLembrei' onClick={() => {setCardState('answered'); setAnswered('wrong'); setIcon('close-circle'); setCount(count + 1); setFooterIcons([...footerIcons, <ion-icon class="wrong md hydrated" name='close-circle'></ion-icon>]); setFlag(1)}}>Não lembrei</div>
                <div className='quaseLembrei' onClick={() => {setCardState('answered'); setAnswered('almost'); setIcon('help-circle'); setCount(count + 1); setFooterIcons([...footerIcons, <ion-icon class="almost md hydrated" name='help-circle'></ion-icon>])}}>Quase não lembrei</div>
                <div className='zap' onClick={() => {setCardState('answered'); setAnswered('right'); setIcon('checkmark-circle'); setCount(count + 1); setFooterIcons([...footerIcons, <ion-icon class="right md hydrated" name='checkmark-circle'></ion-icon>])}}>Zap!</div>
            </div>
        </div>
    );
}

function FlashCardsAnswered({index, answered, icon}) {
    let a = '';
    if (icon === 'close-circle') {
        a = <div className='wrong'><ion-icon name='close-circle'></ion-icon></div>;
    } else if (icon === 'help-circle') {
        a = <div className='almost'><ion-icon name='help-circle'></ion-icon></div>;
    } else if (icon === 'checkmark-circle') {
        a = <div className='right'><ion-icon name='checkmark-circle'></ion-icon></div>;
    }
    return (
        <div className="flashCardsQuestions">
            <div className={icon} ><p>Pergunta {index}</p>
            {a}
            </div>
        </div>
    );
}

function Console(answer) {
    console.log(answer);
}

export default function Screen2FlashCards() {
    const [answered, setAnswered] = React.useState('');
    const [count, setCount] = React.useState(0);
    const [flag, setFlag] = React.useState(0);
    const [footerIcons, setFooterIcons] = React.useState([]);
    const questions = [
        {
            question: "O que é JSX?",
            answer: "Uma extensão de linguagem do JavaScript"
        },
        {
            question: "O React é __?",
            answer: "uma biblioteca JavaScript para construção de interfaces"
        },
        {
            question: "Componentes devem iniciar com __?",
            answer: "letra maiúscula"
        },
        {
            question: "Podemos colocar __ dentro do JSX",
            answer: "expressões"
        },
        {
            question: "O ReactDOM nos ajuda __",
            answer: "interagindo com a DOM para colocar componentes React na mesmaexpressões"
        },
        {
            question: "Usamos o npm para __",
            answer: "gerenciar os pacotes necessários e suas dependências"
        },
        {
            question: "Usamos props para __",
            answer: "passar diferentes informações para componentes"
        },
        {
            question: "Usamos estado (state) para __",
            answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        }
    ];

    /* let randomize = {...questions};
    randomize = randomize.sort(() => Math.random() - 0.5); */
    questions.sort(() => Math.random() - 0.5);

    return (
        <><div className="mobile mobileFlashCards">
            <HeaderFlashCards />

            {questions.map((question, index) => (<FlashCardSwitch key={index} index={index + 1} question={question.question} answer={question.answer} answered={answered} setAnswered={setAnswered} count={count} setCount={setCount} footerIcons={footerIcons} setFooterIcons={setFooterIcons} flag={flag} setFlag={setFlag} />))}
        </div>
        <FooterFlashCards answered={answered} count={count} footerIcons={footerIcons} flag={flag} /></>
    );
}