import io from "socket.io-client"

const socket = io("http://ws.localhost", { transports: ['websocket'], autoConnect: false });

export default socket;
