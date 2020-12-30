const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
let PORT = process.env.port || 3000;
let API_KEY = process.env.api_key;
let server = express();
const middlewares = [
  express.static("dist"),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true })
];

server.use(middlewares);

server.get("/costar", (_, res) => {
  if (API_KEY) {
    axios
      .get(
        `https://www.alphavantage.co/query?apikey=${API_KEY}&function=TIME_SERIES_DAILY_ADJUSTED&symbol=CSGP`
      )
      .then((costarData) => {
        const { data } = costarData;
        var keys = Object.keys(data["Time Series (Daily)"]);
        var lastTradingDayKey = keys[0];
        var dayBeforeLastTradingDayKey = keys[1];
        var lastClose =
          data["Time Series (Daily)"][lastTradingDayKey]["4. close"];
        var comparisonClose =
          data["Time Series (Daily)"][dayBeforeLastTradingDayKey]["4. close"];
        var stockUp = lastClose > comparisonClose;
        var stockClass = "stock-down";
        if (stockUp) {
          stockClass = "stock-up";
        }
        res.status(200);
        res.send({ lastClose: `${lastClose}`, stockUp });
      })
      .catch((e) => {
        res.status(500);
        res.send({ failure: true });
      });
  } else {
    res.send({ lastClose: 1000, stockUp: true });
  }
});

server.get("/", (_, res) => {
  if (PORT !== 3000) {
    return res.send(`<!DOCTYPE html>
                      <style>
                      html,body{ width: 98vw; height: 96vh;  }
                      #root{ height: 100%; }
                      #underConstruction{
                        width: 500px;
                        top: 200px;
                        text-align: center;
                        position: absolute;
                        border: solid 5px black;
                        background-color: yellow;
                        height: 44px;
                        margin: auto;
                        z-index: 242;
                        line-height: 41px;
                        transform: rotate(20deg);
                      }
                      </style>
                      <html>
                        <head></head>
                        <body>
                        <div id="underConstruction">THIS SITE IS UNDER MAINTENANCE</div>
                        <div id="root" />
                          <script src="/bundle.js"></script>
                        </body>
                      </html>
                    `);
  }
  return res.send(`<!DOCTYPE html>
  <style>
  html,body{ width: 98vw; height: 96vh;  }
  #root{ height: 100%; }
  </style>
  <html>
    <head></head>
    <body>
    <div id="root" />
      <script src="/bundle.js"></script>
    </body>
  </html>
`);
});

server.listen(PORT, function () {
  console.log(`server listening on port: ${PORT}`);
});
