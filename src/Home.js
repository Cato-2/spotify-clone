import React from "react";
import Sidebar from "./home_components/Sidebar";
import Body from "./home_components/Body";
import Footer from "./home_components/Footer";
import "./styles/Home.css";

function Home() {

  return (
    <div className="main">
      <div className="main_">
        <Sidebar /> {/* etiqueta siempre tiene que ir con primera letra mayuscula */}
        <Body />
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
