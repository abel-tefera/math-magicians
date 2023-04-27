import './App.css';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';

function App() {
  return (
    <div className="App">
      <h1 className="text-center text-2xl">Math Magicians</h1>
      <div className="flex flex-row justify-around">
        <Quotes />
        <Calculator />
      </div>
    </div>
  );
}

export default App;
