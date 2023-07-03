import Banner from "../../Banner/Banner";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Project from "../Project/Project";
import Resume from "../Resume/Resume";
import Service from "../Service/Service";


const Home = () => {
  return (
    <main className="bg-[#212529]">
      <Banner></Banner>
      <About></About>
      <Service></Service>
      <Resume></Resume>
      <Project></Project>
      <Contact></Contact>
    </main>
  );
};

export default Home;
