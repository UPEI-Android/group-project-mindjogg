// Import dotenv module
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

const {
    PORT,
    HOST,
    HOST_URL,
    JWT_SECRET
} = process.env;

module.exports = {
    port: PORT,
    host: HOST,
    hostUrl: HOST_URL,
    jwtSecret: JWT_SECRET
};