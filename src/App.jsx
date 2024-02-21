import './App.css';
import GitHubIcon from '@mui/icons-material/GitHub';

import AddMemoButton from './components/AddMemoButton';
import CreateMemo from './components/CreateMemo';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import TopNavigationBar from "./components/TopNavigationBar";
import MemoList from './components/MemoList';
import { useAppContext } from './contexts/AppContext';
import { Tooltip } from '@mui/material'

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
        <Tooltip title="View in Github">
          <div id="visit-github" type="button" class="github-btn" >
            <a href="https://github.com/glowiep/quick-memo" target="_blank">
              <GitHubIcon sx={{
                height: "large"
              }}/>
            </a>
          </div>
        </Tooltip>
      </div>
    </ThemeProvider>
  );
}

export default App;
