import AppBar from './components/AppBar';
import { AppContextProvider } from './contexts/AppContextProvider';

function App() {
  return (
    <AppContextProvider>
      <AppBar />
      <div>Sorting Visualization</div>
    </AppContextProvider>
  );
}

export default App;
