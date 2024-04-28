require('dotenv').config();

const dev = {
    port: process.env.port,
    db_url: process.env.db_url 
}

module.exports = dev;