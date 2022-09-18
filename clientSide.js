const net = require("net");

const promptSync = require("prompt-sync");
const prompt = promptSync();

const readLine = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let isRunning = true;
while (isRunning) {

  console.log('Pick a room to join! \n[1] Front-end \n[2] Back-end')
  let server = prompt(">",);
  if (parseInt(server) !== 1 && parseInt(server) !== 2) {
    console.log("That is not a valid choice. Try again. ");

  } else if (parseInt(server) === 1) {
    isRunning = false;

    let username = prompt("Enter a user name to join the chat: ");
    const socket = net.connect({
      port: 1010,
    });

    socket.on("connect", () => {
      socket.write(`[${username}] has joined the chat.`);
    });

    readLine.on("line", (data) => {
      if (data === "quit") {
        socket.write(`[${username}] has left the chat`);
        socket.setTimeout(1500);
      } else {
        socket.write(`${username}: ${data}`);
      }
    });

    socket.on("data", (data) => {
      console.log("\x1b[33m%s\x1b[0m", data);
    });

    socket.on("timeout", () => {
      socket.write("quit");
      socket.end();
    });

    socket.on("end", () => {
      process.exit();
    });

    socket.on("error", () => {
      console.log("The server seems to have been shut down.");
      console.log('Come back later and try again.');
      process.exit();
    });

  } else if (parseInt(server) === 2) {
    isRunning = false;

    let username = prompt("Enter a user name to join the chat: ");
    isRunning = false;
    const socket = net.connect({
      port: 2020,
    });

    socket.on("connect", () => {
      socket.write(`[${username}] has joined the chat.`);
    });

    readLine.on("line", (data) => {
      if (data === "quit") {
        socket.write(`[${username}] has left the chat`);
        socket.setTimeout(1500);
      } else {
        socket.write(`${username}: ${data}`);
      }
    });

    socket.on("data", (data2) => {
      console.log("\x1b[33m%s\x1b[0m", data2);
    });

    socket.on("timeout", () => {
      socket.write("quit");
      socket.end();
    });

    socket.on("end", () => {
      process.exit();
    });

    socket.on("error", () => {
      console.log("The server seems to have been shut down.");
      console.log('Come back later and try again.');
      process.exit();
    });
  }
}






