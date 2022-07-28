const { Pool } = require("pg");
const pool = new Pool({
  localhost: "localhost",
  database: "tourist",
  port: 5432,
  user: "postgres",
  password: "220514",
});
pool.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = { pool };
