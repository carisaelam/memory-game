import './App.css';
import Cardboard from './components/Cardboard';
import shuffle from './utils/shuffle';

function App() {
  shuffle([1, 2, 3, 4, 5]);
  return <Cardboard />;
}

export default App;
