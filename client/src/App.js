import './App.css';
import Layout from './layout/Layout';
import {BrowserRouter} from 'react-router-dom';
import Router from './routes/Router';
import {AppThemePrvoider} from './providers/ThemePrvoider';
import {SnackbarProvider} from './providers/SnackbarProvider';
import {UserProvider} from './users/providers/UserProvider';

function App () {
  return (
    <BrowserRouter>
      <AppThemePrvoider>
        <SnackbarProvider>
          <UserProvider>
            <Layout>
              <Router />
            </Layout>
          </UserProvider>
        </SnackbarProvider>
      </AppThemePrvoider>
    </BrowserRouter>
  );
}

export default App;
