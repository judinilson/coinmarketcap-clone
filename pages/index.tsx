import type { NextPage } from "next";
import CMCtable from "../components/cmc-table/Cmc-Table";
import Header from "../components/Header";
import Tranding from "../components/Trending";

const Home: NextPage = () => {
  return (
    <div className="main-h-screen">
      <Header />
      <Tranding />
      <CMCtable />
    </div>
  );
};

export default Home;
