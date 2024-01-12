import {
  ExploreCapsules,
  ExploreRockets,
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
      </main>
    </>
  );
};

export default App;
