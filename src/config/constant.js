const constants = {
  DATABASE: {
    PG: {
      DBNAME: process.env.PG_DBNAME,
      PORT: process.env.PG_PORT,
      HOST: process.env.PG_HOST,
      PASSWORD: process.env.PG_PASSWORD,
      USERNAME: process.env.PG_USERNAME,
      CONNECTION_LIMIT: process.env.PG_CONNECTION_LIMIT,
    },
  },
  // ERROR_CODES: {
  //     OK: HTMLOutputElement.
  // }
};

module.exports = constants;