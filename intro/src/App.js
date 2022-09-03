import './App.css';
import {Portfolio} from './firtsTask/components/portfolio';
import {Store} from './secondTask/components/store';



function App() {
  let isPortfolio = true;
  return isPortfolio ? <Portfolio/> : <Store/>;
}



export default App;
