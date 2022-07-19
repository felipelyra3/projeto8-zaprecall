import ReactDOM from 'react-dom';
import Screen1Welcome from './Components/Screen1Welcome';
import Screen2FlashCards from './Components/Screen2FlashCards';

function App() {
    return (
        <div class="page">
           {/* <Screen1Welcome /> */}
           <Screen2FlashCards />
        </div>
    );
}

const app = App();
ReactDOM.render(<App />, document.querySelector(".root"));