import { Outlet } from "react-router-dom";
import Navbar from "./page/shared/Navbar/Navbar";
import Footer from "./page/shared/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default App;
