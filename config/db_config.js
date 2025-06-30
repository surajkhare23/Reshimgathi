const mongoose = require("mongoose");
const logger = require("../core/logger");


mongoose.connect(process.env.DB_URL).catch((e) => logger.error(e)).finally(() => logger.info("DB SUCCESSFULLY CONNECTED"));