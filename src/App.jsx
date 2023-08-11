import GlobalStyle from './theme/globalStyles';
import Main from './pages/main';
import Rotas from './routes';
import ScrollToTop from './components/scrollToTop';

function App() {
  return (
    <>
      <GlobalStyle />
      <ScrollToTop/>
      <Rotas />
    </>
  );
}

export default App;
