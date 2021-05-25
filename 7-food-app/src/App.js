import './App.css';
import { AppContextProvider } from './state/Context';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <Home />
      </AppContextProvider>
    </div>
  );
}

export default App;
