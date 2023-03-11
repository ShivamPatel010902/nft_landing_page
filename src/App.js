import React from "react";
import Footer from "./partials/Footer";
import Product from "./partials/Product";
import Landing from "./partials/Landing";
import Navbar from "./partials/Navbar";
import HowItWorks from "./partials/HowItWorks";
import Lender from "./partials/Lender";
import Buyer from "./partials/Buyer";
import FAQs from "./partials/FAQs";
import Team from "./partials/Team"
import Roadmap from "./partials/Roadmap";


function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Product />
      <Buyer />
      <Lender />
      <HowItWorks />
      <Roadmap />
      {/* <FAQs /> */}
      <Team />
      <Footer />
    </>
  );
}

export default App;

