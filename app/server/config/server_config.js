// Import dotenv module
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

const {
    PORT,
    HOST,
    GMAIL_USER,
    GMAIL_PASSWORD,
    ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET,
    HOST_URL,
    ATLAS_URI,
    JWT_SECRET,
    JWT_ADMIN
} = process.env;

module.exports = {
    port: PORT,
    host: HOST,
    gmail_user:GMAIL_USER,
    gmail_password:GMAIL_PASSWORD,
    access_token:ACCESS_TOKEN_SECRET,
    refresh_token:REFRESH_TOKEN_SECRET,
    hostUrl: HOST_URL,
    jwtSecret: JWT_SECRET,
    jwtSecretAdmin:JWT_ADMIN,
    database_link: ATLAS_URI
};