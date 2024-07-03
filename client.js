const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
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
    });

    conn.on("connect", () => {
      conn.write("Name: SNK");
    });

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = connect;