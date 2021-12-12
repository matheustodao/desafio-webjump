import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Router from '../Router';

import Header from './components/ConditionalRenderHeader';
import { Footer } from '../components/Footer';

import GlobalStyle from '../assets/styles/global';
import defaultTheme from '../assets/styles/themes/default';
import { Container } from './styles';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Header />
        <Container>
          <Router />
        </Container>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}
