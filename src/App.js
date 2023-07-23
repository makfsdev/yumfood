import React from "react";
import TopNav from "./components/TopNav";
import Featured from "./components/Featured";
import Delivery from "./components/Delivery";
import TopPicks from "./components/TopPicks";
import Meal from "./components/Meal";
import Categories from "./components/Categories";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <TopNav />
      <Featured />
      <Delivery />
      <TopPicks />
      <Meal />
      <Categories />
      <Newsletter />
      <Footer />
    </>
  );
};

export default App;
