import './App.css';

import AddMemoButton from './components/AddMemoButton';
import CreateMemo from './components/CreateMemo';
import ClearAllButton from './components/ClearAllButton';
import GithubIcon from './components/GithubIcon';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import TopNavigationBar from "./components/TopNavigationBar";
import MemoList from './components/MemoList';
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
        {state.showCreateMemo && <CreateMemo />}
        <MemoList />
        <ClearAllButton />
        <GithubIcon />
      </div>
    </ThemeProvider>
  );
}

export default App;
