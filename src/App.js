import "./App.css";
import Navbar from "./containers/Navbar/Navbar";
import Darkmode from "darkmode-js";
import Banner from "./containers/Banner/Banner";
import Gallery from "./containers/Gallery/Gallery";
import Footer from "./containers/Footer/Footer";
import { useRef } from "react";

const options = {
  bottom: "64px", // default: '32px'
  right: "unset", // default: '32px'
  left: "32px", // default: 'unset'
  time: "0.5s", // default: '0.3s'
  mixColor: "#fff", // default: '#fff'
  backgroundColor: "#fff", // default: '#fff'
  buttonColorDark: "#100f2c", // default: '#100f2c'
  buttonColorLight: "#fff", // default: '#fff'
  saveInCookies: false, // default: true,
  label: "🌓", // default: ''
  autoMatchOsTheme: true, // default: true
};

const darkmode = new Darkmode(options);
darkmode.showWidget();
function App() {

  
  const gallery = useRef(null);

  return (
    <div className="App">
      {/* Navbar  */}

      <Navbar />

      {/* Banner  */}

      <Banner />

      {/* Gallery */}
      <Gallery />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
