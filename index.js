const express = require("express");
const bodyParser = require("body-parser");
//test
let PORT = process.env.port || 3000;
let server = express();
const middlewares = [
  express.static("dist"),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true })
];

server.use(middlewares);

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
