import './App.css';
import Layout from './layout/Layout';
import {BrowserRouter} from 'react-router-dom';
import Router from './routes/Router';
import {AppThemePrvoider} from './prvoiders/ThemePrvoider';

function App () {
  return (
    <BrowserRouter>
      <AppThemePrvoider>
        <Layout>
          <Router />
        </Layout>
      </AppThemePrvoider>
    </BrowserRouter>
  );
}

export default App;
