// Import dotenv module
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

const {
    PORT,
    HOST,
    GMAIL_USER,
    GMAIL_PASSWORD,
    HOST_URL,
    ATLAS_URI,
    JWT_SECRET
} = process.env;

module.exports = {
    port: PORT,
    host: HOST,
    gmail_user:GMAIL_USER,
    gmail_password:GMAIL_PASSWORD,
    hostUrl: HOST_URL,
    jwtSecret: JWT_SECRET,
    database_link: ATLAS_URI
};