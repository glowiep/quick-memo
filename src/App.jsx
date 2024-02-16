import './App.css';

import AddMemoButton from './components/AddMemoButton';
import NewMemo from './components/NewMemo';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Application from './components/Application';
import { useAppContext } from './contexts/AppContext';


function App() {
  const { state } = useAppContext();
  const darkMode = state.darkMode;

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light'
    }
  });
  
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <Application />
        <AddMemoButton />
        <NewMemo />
      </div>
    </ThemeProvider>
  );
}

export default App;
