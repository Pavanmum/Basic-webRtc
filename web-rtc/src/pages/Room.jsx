import { useEffect } from "react";
import { useSocket } from "../providers/SocketProvider"


const RoomPage = () => {
    const { socket } = useSocket();

    const handleNewUserJoined = (data) => {
        const {userId} = data
        console.log("New user joined", userId)
    }
 
    useEffect(() => {
        socket.on("user-joined",handleNewUserJoined)
    }, [socket])
    return (
        <div>
        <h1>Room</h1>
        </div>
    )
}

export default RoomPage