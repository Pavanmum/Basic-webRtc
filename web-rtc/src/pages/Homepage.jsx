import { useEffect, useState } from "react";
import { useSocket } from "../providers/SocketProvider"
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const {socket} = useSocket();

  const [userId, setUserId] = useState("");
  const [roomId, setRoomId] = useState("");
  const navigate = useNavigate();

  const handleJoinRoom = () => {
    socket.emit("join-room", { roomId, userId})
  }

  const handleRoomJoined = ({roomId}) => {
    navigate(`/room/${roomId}`)
  }

  useEffect (()=> { 
    socket.on("joined-room",handleRoomJoined)
  },[socket])
  return (
    <div>
        <div className="container-room">
            <div>
                <input type="email" value={userId} onChange={(e) => setUserId(e.target.value)} placeholder="Enter your email here" />
                <input type="text" value={roomId} onChange={(e) => setRoomId(e.target.value)}placeholder="Enter the code" />
            </div>
            <div>
                <button onClick={handleJoinRoom}>Enter Room</button>

            </div>
        </div>
    </div>
  )
}

export default Homepage