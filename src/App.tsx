import { HistoricalDatesBlock } from '@/components/HistoricalDatesBlock/HistoricalDatesBlock';
import { Container, GlobalStyle } from '@/styles/GlobalStyle';
import { SwiperGlobalStyle } from '@/styles/SwiperRestyles';
import { CreatedBy } from './components/FooterComponent/CreatedBy';
import { data } from './data/data';

function App() {
  return (
    <>
      <GlobalStyle />
      <SwiperGlobalStyle />
      <Container>
        <HistoricalDatesBlock data={data} />
        <CreatedBy />
      </Container>
    </>
  );
}

export default App;
