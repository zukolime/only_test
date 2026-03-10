import { Container, GlobalStyle } from '@/styles/GlobalStyle';
import { SwiperGlobalStyle } from '@/styles/SwiperRestyles';
import { HistoricalDatesBlock } from '@/components/HistoricalDatesBlock/HistoricalDatesBlock';
import { data } from './data/data';

function App() {
  return (
    <>
      <GlobalStyle />
      <SwiperGlobalStyle />
      <Container>
        <HistoricalDatesBlock data={data} />
      </Container>
    </>
  );
}

export default App;
