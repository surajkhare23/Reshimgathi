require("dotenv").config();
require("./config/db_config");
const express = require("express");
const response = require("./core/response");
const logger = require("./core/logger");
const winstonMorgan = require("./middlewares/winston_morgan_middleware");

const app = express();


app.use(winstonMorgan(logger));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    response(res, 200, "Hii From Instagram Server");
});

app.listen(process.env.PORT, () => {
    logger.info(`Server is running at port ${process.env.PORT} `);
})