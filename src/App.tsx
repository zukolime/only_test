import { Container, GlobalStyle, Section } from '@/styles/GlobalStyle';
import { HistoricalDatesBlock } from '@/components/HistoricalDatesBlock/HistoricalDatesBlock';
import { data } from './data/data';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <HistoricalDatesBlock data={data} />
      </Container>
    </>
  );
}

export default App;
