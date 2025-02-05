
const setupInput = function (conn) {
  const connection = conn;
  const stdin = process.stdin; // create variable to hold the stdin object so we don't have to type process.stdin multiple times
  stdin.setRawMode(true); // Raw Mode allows us to listen for individual keypresses instead of waiting for the user to press enter
  stdin.setEncoding("utf8"); // utf8 encoding is set so that we can read the text data that is input
  stdin.resume(); // resume stdin so the program can listen for input
  
  //.on  shorthand for on the event ... of 
  stdin.on("data", (key) => handleUserInput(key, conn)); // event listener

  return stdin; // return the stdin object so we can use it elsewhere in the program
};

// The handleUserInput function specifies what happens when "data" is received from stdin... in other words, what happens when a particular key is pressed on the keyboard input.
const handleUserInput = function (key, conn) {
  switch (key) {
    case "\u0003":
      process.exit();

    case "w":
      conn.write("Move: up");
      break;
    case "a":
      conn.write("Move: left");
      break;
    case "s":
      conn.write("Move: down");
      break;
    case "d":
      conn.write("Move: right");
      break;
    case "9":
      conn.write("Say: Ow!")
      break;
      case "0":
      conn.write("Say: No!")
      break;
  }
}

module.exports = setupInput;
