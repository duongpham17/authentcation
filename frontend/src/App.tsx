import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@redux/store';
import Navbar from './layouts/navbar';
import Global from './global';
import Pages from './pages';

export const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Global />
      <Navbar />
      <Pages />
    </BrowserRouter>
  </Provider>
);

export default App;