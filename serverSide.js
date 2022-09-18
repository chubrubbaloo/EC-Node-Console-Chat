const net = require("net");
console.log('\x1b[33m%s\x1b[32m', "Server up and running.");

let frontEndSockets = [];
let backEndSockets = [];

// Front-end room.
const frontEnd = net.createServer((socket) => {
    console.log('\x1b[32m%s\x1b[32m', "Client connected.");
    frontEndSockets.push(socket);

    socket.on("error", (error) => {
        console.log('\x1b[32m%s\x1b[32m', "A client has abruptly been disconnected. Error type: " + error.message);
    });

    socket.on("data", (data) => {
        console.log('\x1b[32m%s\x1b[32m', data.toString());
        broadcast(data, socket, "array");
    });

    socket.on("close", () => {
        console.log('\x1b[32m%s\x1b[32m', "Client has disconnected.");
    });
});

// Back end room.
const backEnd = net.createServer((socket) => {
    console.log('\x1b[33m%s\x1b[32m', "Client connected.");
    backEndSockets.push(socket);

    socket.on("error", (error) => {
        console.log('\x1b[33m%s\x1b[32m', "A client has abruptly been disconnected. Error type: " + error.message);
    });


    socket.on("data", (data) => {
        console.log('\x1b[33m%s\x1b[32m', data.toString());
        broadcast(data, socket, "secondArray");
    });

    socket.on("close", () => {
        console.log('\x1b[33m%s\x1b[32m', "A client has left the chat.");
    });
});

frontEnd.listen(1010);
backEnd.listen(2020);

const broadcast = (message, socketSent, currentArray) => {

    if (currentArray === "array") {

        if (message.toString() === "quit") {
            const index = frontEndSockets.indexOf(socketSent);
            frontEndSockets.splice(index, 1);

        } else {
            frontEndSockets.forEach((socket) => {
                if (socket !== socketSent) socket.write(message);
            });

        }

    } else if (currentArray === "secondArray") {

        if (message.toString() === "quit") {
            const index = backEndSockets.indexOf(socketSent);
            backEndSockets.splice(index, 1);

        } else {
            backEndSockets.forEach((socket) => {
                if (socket !== socketSent) socket.write(message);
            });
        }
    }
}
