import { Hero, Features, States, Tooling, Footer } from "./sections";
import Nav from "./components/Nav";
const App = () => {
  const innerWidth = window.innerWidth;
  return (
    <main className="relative h-screen w-screen overflow-x-hidden">
      <Nav />
      <section>
        <Hero />
      </section>
      <section className="lg:padding lg:h-fit lg:w-full">
        <Features />
      </section>
      <section className="lg:padding-y lg:h-full lg:w-full xl:h-fit">
        <States />
      </section>
      <section className="lg:max-h-full lg:w-full">
        <Tooling />
      </section>
      <section className="lg:padding-t lg:h-fit lg:w-full">
        <Footer />
      </section>
    </main>
  );
};

export default App;
