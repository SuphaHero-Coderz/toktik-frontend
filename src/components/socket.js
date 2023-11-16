import io from "socket.io-client"

const socket = io("http://socket:3001", { autoConnect: false });

export default socket;
