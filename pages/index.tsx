import type { NextPage } from "next";
import CMCtable from "../components/cmc-table/Cmc-Table";
import Header from "../components/Header";
import SwapCryptoModal from "../components/swapCryptoModal";
import Tranding from "../components/Trending";

const Home: NextPage = () => {
  return (
    <div className="main-h-screen">
      <Header />
      <Tranding />
      <SwapCryptoModal />
      <CMCtable />
    </div>
  );
};

export default Home;
