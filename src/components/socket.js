import io from "socket.io-client"

const socket = io("http://ws.localhost", { transports: ['websocket']});

export default socket;
