import logo from './logo.svg';
import './App.css';
import ButtonComponent from './hoc/ButtonComponent';
import HoverComponent from './hoc/HoverComponent';
import Calc from './calculator/containers/Calc';
import Timer from './calculator/containers/Timer';



function App() {
  return (
    <div className="App">
      <h2 className="bg-info">Gowri's calculator</h2>
      <Calc />
      <Timer />
    </div>
  );
}

export default App;
