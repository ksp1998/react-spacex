import {
  ExploreCapsules,
  ExploreRockets,
  Footer,
  Header,
  HeroBanner,
  Wrapper,
} from "./components";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Wrapper>
          <HeroBanner />
        </Wrapper>
        <ExploreRockets />
        <ExploreCapsules />
        <Footer />
      </main>
    </>
  );
};

export default App;
