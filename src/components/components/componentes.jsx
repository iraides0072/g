
import { Carousel, Footer, Header, Navbar, PetList
                                       } from "./components";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Navbar />
      <main className="flex flex-grow">
        <Carousel />
        <PetList />
      </main>
      <Footer />
    </div>
  );
};

export default App;