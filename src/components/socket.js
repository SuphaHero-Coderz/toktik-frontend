import io from "socket.io-client"

const socket = io("http://socket:3001");

export default socket;
