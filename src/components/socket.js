import io from "socket.io-client"

const socket = io("http://ws.localhost:3001", { transports: ['websocket'], autoConnect: false });

export default socket;
