import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Browse from "./components/Browse";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Stats />
      <Browse />
      <Footer />
    </div>
  );
}