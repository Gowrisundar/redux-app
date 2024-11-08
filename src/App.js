import logo from './logo.svg';
import './App.css';
import ButtonComponent from './hoc/ButtonComponent';
import HoverComponent from './hoc/HoverComponent';
import Calc from './calculator/containers/Calc';
import Timer from './calculator/containers/Timer';
import Bank from './bankProject/containers/Bank';
import BankApp from './bankProject/BankApp';
import UseReducerDemo from './hooks/useReducerDemo';
import ContextDemo from './contextApi/ContextDemo';
import SanitizeDemo from './xss/SanitizeDemo';



function App() {
  return (
    <div className="App">
      {/* <h2 className="bg-info">Gowri's calculator</h2> */}
      {/* <Calc />
      <Timer /> */}
      <BankApp/>
      {/* <UseReducerDemo/> */}
      {/* <ContextDemo/> */}
      {/* <SanitizeDemo/> */}
    </div>
  );
}

export default App;
