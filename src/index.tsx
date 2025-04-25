import ReactDOM from 'react-dom/client';
import { MainPage } from './pages';
import { ThemeProvider } from './components'; // make sure the path is correct

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <ThemeProvider>
    <MainPage />
  </ThemeProvider>
);
