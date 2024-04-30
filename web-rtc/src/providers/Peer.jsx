import React, {useMemo} from 'react';

const PeerContext = React.createContext(null);


export const PeerProvider = (props) => {
    const peer = useMemo ( () =>  new RTCPeerConnection(),[])
    return (
    <PeerContext.Provider value={{peer}}>
        {props.children}
    </PeerContext.Provider>
)}