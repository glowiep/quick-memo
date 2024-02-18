import './App.css';

import AddMemoButton from './components/AddMemoButton';
import NewMemo from './components/NewMemo';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import TopNavigationBar from "./components/TopNavigationBar";
import { useAppContext } from './contexts/AppContext';


function App() {
  const { state } = useAppContext();

  const darkTheme = createTheme({
    palette: {
      mode: state.darkMode ? 'dark' : 'light'
    }
  });
  
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <TopNavigationBar />
        <AddMemoButton />
        {state.showTextArea && <NewMemo />}
      </div>
    </ThemeProvider>
  );
}

export default App;
