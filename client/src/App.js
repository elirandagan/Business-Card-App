import './App.css';
import Layout from './layout/Layout';
import {BrowserRouter} from 'react-router-dom';
import Router from './routes/Router';
import {AppThemePrvoider} from './providers/ThemePrvoider';
import {SnackbarProvider} from './providers/SnackbarProvider';

function App () {
  return (
    <BrowserRouter>
      <AppThemePrvoider>
        <SnackbarProvider>
          <Layout>
            <Router />
          </Layout>
        </SnackbarProvider>
      </AppThemePrvoider>
    </BrowserRouter>
  );
}

export default App;
