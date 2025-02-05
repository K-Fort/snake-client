const net = require("net");
const IP = require("./constants");
const PORT = require(".constants")

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // handle incoming data and log it
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  // handle connection and log success message
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write("Name: SNK");
  });

  return conn;
};

console.log("Connecting ...");

module.exports = connect;