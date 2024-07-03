const connect = require("./client")

connect();

client.setEncoding("utf8"); // interpret data as text
client.on("data", (data) => {
  console.log("Message from client: ", data);
});