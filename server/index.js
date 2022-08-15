import express from "express";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();
const app = express();

const port = 3000;
var router = express.Router();

router.get("/search", function (req, res) {
  const search_text = "Sample";
  const url = `https://www.googleapis.com/customsearch/v1?key=${process.env.API}&cx=${process.env.CX}&q=${search_text}}`;
  axios
    .get(url)
    .then((response) => {
      res.send(response.data.items);
      console.log(response.data.items);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.use(router);

// app.use("/search", router);
app.listen(port, () => {});
