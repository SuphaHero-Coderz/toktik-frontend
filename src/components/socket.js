import io from "socket.io-client"

const socket = io("http://ws.localhost", { transports: ['websocket'], autoConnect: false});

socket.on("connect_error", (err) => {
  console.log(`connect_error due to ${err.message}`);
});
export default socket;
