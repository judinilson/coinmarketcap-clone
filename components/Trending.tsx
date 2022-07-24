import { useState } from "react";
import Rate from "./cmc-table/Rate";
import fire from "../assets/fire.png";
import btc from "../assets/btc.png";
import usdt from "../assets/usdt.png";
import gainers from "../assets/gainers.png";
import recent from "../assets/recent.png";
import TrendingCard from "./TrendingCard";
import ReactSwitch from "react-switch";

const trendingData = [
  {
    number: 1,
    symbol: "BTC",
    name: "Bitcoin",
    icon: btc,
    isIncrement: true,
    rate: "2.34%",
  },
  {
    number: 2,
    symbol: "USDT",
    name: "Tether",
    icon: usdt,
    isIncrement: false,
    rate: "9.32%",
  },
  {
    number: 1,
    symbol: "BTC",
    name: "Bitcoin",
    icon: btc,
    isIncrement: true,
    rate: "2.34%",
  },
];

function Tranding() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="text-white">
      <div className={styles.trendingWrapper}>
        <div className="flex justify-between">
          <h1 className={styles.h1}>
            Todays Cryptocurrency Prices by Market Cap
          </h1>

          <div className="flex">
            <p className="text-gray-400 ">Highlights &nbsp;</p>
            <ReactSwitch
              checked={checked}
              onChange={() => {
                setChecked(!checked);
              }}
            />
          </div>
        </div>
        <br />
        <div className="flex">
          <p className={styles.p}>
            The global crypto market cap is $1.02T, a &nbsp;
          </p>
          <span>
            <Rate isIncrement={false} rate="1.07%" />
          </span>
          <p className={styles.p}>
            &nbsp; decrease over the last day. &nbsp;
            <span className="underline"> Read More </span>
          </p>
        </div>
        <br />

        <div className={styles.flexCenter}>
          <TrendingCard
            title="Trending"
            icon={fire}
            trendingData={trendingData}
          />
          <TrendingCard
            title="Biggest Gainers"
            icon={gainers}
            trendingData={trendingData}
          />
          <TrendingCard
            title="Recently Added"
            icon={recent}
            trendingData={trendingData}
          />
        </div>
      </div>
    </div>
  );
}
const styles = {
  trendingWrapper: `mx-auto max-w-screen-2xl mt-20 mx-20 mb-20`,
  h1: `text-3xl text-white`,
  flexCenter: `flex items-center,`,
  p: `text-gray-400`,
};
export default Tranding;
