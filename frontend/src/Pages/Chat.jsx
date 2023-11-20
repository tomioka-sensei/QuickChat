import React, { useEffect, useState } from 'react'
import axios from "axios"

const Chat = () => {
  const[chats , setChats] = useState();

  const dataCatch = ()=>{
      const {data} = axios.get('api/chats');
      setChats(data);
  }

  useEffect(()=>{
      dataCatch();
  },[])

return (
  <div>{chats.map( c => (
      <div>
          
          c.chatname
          </div>
          
          ) )}</div>
)
}

export default Chat