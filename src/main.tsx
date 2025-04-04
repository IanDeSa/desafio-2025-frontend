import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from '@mui/material'
import { theme } from './theme.ts'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <App />
        <ToastContainer />
      </QueryClientProvider>
    </ThemeProvider>
)