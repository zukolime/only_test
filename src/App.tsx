import { Container, GlobalStyle, Section } from '@/styles/GlobalStyle';
import { HistoricalDatesBlock } from '@/components/HistoricalDatesBlock/HistoricalDatesBlock';
import { data } from './data/data';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Section>
          <HistoricalDatesBlock data={data} />
        </Section>
      </Container>
    </>
  );
}

export default App;
