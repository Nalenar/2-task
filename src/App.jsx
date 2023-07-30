import Background from "./components/Background";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="h-full w-full">
      <Background />
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default App;
