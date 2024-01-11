import { Header, HeroBanner, Wrapper } from "./components";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Wrapper>
          <HeroBanner />
        </Wrapper>
      </main>
    </>
  );
};

export default App;
