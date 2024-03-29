const express = require("express");
const apiRoutes = require("./routes/apiroutes");
const htmlroutes = require("./routes/htmlroutes");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use("/apiRoutes", apiRoutes);

app.use("/", htmlroutes);

app.listen(PORT, () => {
  console.log("localhost/3001");
});
