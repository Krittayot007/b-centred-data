require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

const orderRoute = require("./routes/order-route");

const notFoundMiddleware = require("./middlewares/notFound");
const errorMiddleware = require("./middlewares/error");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("combined"));
}

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/order", orderRoute);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 8800;
app.listen(port, () => console.log(`server running on port: ${port}`));
