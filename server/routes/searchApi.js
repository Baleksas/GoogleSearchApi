import express from "express";
const router = express.Router();
import axios from "axios";

router.get("/search", function (req, res) {
  const search_text = "Sample";
  const url = `https://www.googleapis.com/customsearch/v1?key=${process.env.API}&cx=${process.env.CX}&q=${search_text}}`;
  axios
    .get(url)
    .then((response) => {
      // console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
