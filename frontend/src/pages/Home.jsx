import Footer from "../components/Footer";
import Gridbox from "../components/GridBox/Gridbox";
import Navbar from "../components/NavBar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="divider"></div>
      <Gridbox />
      <div className="divider"></div>
      <Footer />
    </div>
  );
};

export default Home;
