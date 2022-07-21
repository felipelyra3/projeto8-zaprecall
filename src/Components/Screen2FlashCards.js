import React from 'react';
import FooterFlashCards from "./FooterFlashCards";
import HeaderFlashCards from "./HeaderFlashCards"

function FlashCardSwitch({ index, question, answer, answered, setAnswered }) {
    const [cardState, setCardState] = React.useState('start');
    const [icon, setIcon] = React.useState('');

    if (cardState === 'start') {
        return <NumberedQuestions index={index} setCardState={setCardState} />
    } else if (cardState === 'question') {
        return <FlashCardsQuestions setCardState={setCardState} question={question} />
    } else if (cardState === 'answer') {
        return <FlashCardsAnswers answer={answer} setCardState={setCardState} setAnswered={setAnswered} setIcon={setIcon}/>
    } else if (cardState === 'answered') {
        return <FlashCardsAnswered index={index} answered={answered} icon={icon} />
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

function FlashCardsAnswers({ answer, setCardState, setAnswered, setIcon}) {
    return (
        <div className="flashCardsQuestions">
            <p>{answer}</p>
            <div className='answerIcons'>
                <div className='naoLembrei' onClick={() => {setCardState('answered'); setAnswered('wrong'); setIcon('close-circle')}}>Não lembrei</div>
                <div className='quaseLembrei' onClick={() => {setCardState('answered'); setAnswered('almost'); setIcon('help-circle')}}>Quase não lembrei</div>
                <div className='zap' onClick={() => {setCardState('answered'); setAnswered('right'); setIcon('checkmark-circle')}}>Zap!</div>
            </div>
        </div>
    );
}

function FlashCardsAnswered({index, answered, icon}) {
    return (
        <div className="flashCardsQuestions">
            <p>Pergunta {index}</p>
            <ion-icon name={icon}></ion-icon>
        </div>
    );
}

function Console(answer) {
    console.log(answer);
}

export default function Screen2FlashCards() {
    const [answered, setAnswered] = React.useState('');
    const [count, setCount] = React.useState(0);
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
        }/* ,
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
        } */
    ];

    /* let randomize = {...questions};
    randomize = randomize.sort(() => Math.random() - 0.5); */
    questions.sort(() => Math.random() - 0.5);

    return (
        <div className="mobile mobileFlashCards">
            <HeaderFlashCards />

            {questions.map((question, index) => (<FlashCardSwitch key={index} index={index + 1} question={question.question} answer={question.answer} answered={answered} setAnswered={setAnswered} />))}

            <FooterFlashCards answered={answered} count={count} setCount={setCount} />
        </div>
    );
}