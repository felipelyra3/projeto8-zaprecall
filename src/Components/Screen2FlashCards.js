import FooterFlashCards from "./FooterFlashCards";
import HeaderFlashCards from "./HeaderFlashCards"

function FlashCardsQuestions(props) {
    return (
        <div className="flashCardsQuestions">
            <p>{props.index} {props.question}</p>
            <ion-icon name="play-outline"></ion-icon>
        </div>
    );
}

export default function Screen2FlashCards() {
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
        <div className="mobile mobileFlashCards">
            <HeaderFlashCards />

            {questions.map((question, index) =>(<FlashCardsQuestions key={index} question={question.question} answer={question.answer} />))}

            <FooterFlashCards />
        </div>
    );
}