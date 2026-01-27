import { Container, GlobalStyle } from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <div className='App'>
          <header className='App-header'>
            <h1>Исторические даты</h1>
          </header>
        </div>
      </Container>
    </>
  );
}

export default App;
