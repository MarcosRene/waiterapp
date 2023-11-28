import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';

import { Header } from './components/Header';
import { Orders } from './components/Orders';

import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return(
    <>
      <Header />
      <Orders />
      <GlobalStyles />
      <ToastContainer position='bottom-center' />
    </>
  );
}

export default App;
