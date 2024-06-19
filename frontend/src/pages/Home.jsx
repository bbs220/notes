import Footer from "../components/Footer";
import Gridbox from "../components/GridBox/Gridbox";
import Navbar from "../components/NavBar/Navbar";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="divider"></div>
      <SearchBar />
      <div className="divider"></div>
      <Gridbox />
      <div className="divider"></div>
      <Footer />
    </div>
  );
};

export default Home;
