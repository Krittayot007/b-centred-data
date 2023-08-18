require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const orderRoute = require("./routes/order-route");
const customerRoute = require("./routes/customer-route");
const classRoute = require("./routes/class-route");
const crudRoute = require("./routes/crud-route");
const manualRoute = require("./routes/manaul-route");

const notFoundMiddleware = require("./middlewares/notFound");
const errorMiddleware = require("./middlewares/error");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("combined"));
}

app.use(
  rateLimit({
    windowMs: 1000 * 60 * 15,
    max: 500,
    message: { message: "too many request" },
  })
);

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/order", orderRoute);
app.use("/customer", customerRoute);
app.use("/class", classRoute);
app.use("/crud", crudRoute);
app.use("/manualSearch", manualRoute);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 8800;
app.listen(port, () => console.log(`server running on port: ${port}`));
