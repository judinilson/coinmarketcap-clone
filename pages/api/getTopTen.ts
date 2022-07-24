// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
  const getData = async () => {
    const response = await fetch(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${process.env.CMC_API_KEY}`,
      {
        method: "GET",
        headers: {
          Accept: "*/*",
        },
      }
    );

    const data = await response.json();

    res.status(200).json({ data });
  };

  getData();
}

/*
unirest.post("https://CoinMarketCapzakutynskyV1.p.rapidapi.com/getCryptocurrenciesList")
.header("X-RapidAPI-Key", "{Your RapidAPI Key}")
.header("Content-Type", "application/x-www-form-urlencoded")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});

*/
