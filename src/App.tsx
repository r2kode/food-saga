import { useSelector, useDispatch } from 'react-redux';
import { selectSpoonacularData, spoonacularActions } from './data/spoonacular';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const recepes = useSelector(selectSpoonacularData);
  console.log(recepes);

  const handleRecepesSearch = () => {
    dispatch(spoonacularActions.fetch('beef'));
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleRecepesSearch}>Fetch recepes</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more...
      </p>
    </div>
  );
}

export default App;
