import React, { useEffect, useState } from "react";
import "../chat.css";
import { ChatState } from "../../Context/ChatProvider";
// import "./chat.css";

const SingleChat = ({ fetchAgain, setFetchAgain }) => {

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState();
  const {user, selectedChat, setSelectedChat } = ChatState();
  // const { getUserData, setUserData, selectedChat, setSelectedChat } = ChatState();
  // const [user, setUser] = useState(getUserData());

  // useEffect(() => {
  //   const userData = getUserData();
  //   setUser(userData);
  // }, []);


  return (
    <>
    {selectedChat ? (
        <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
              nobis repudiandae, repellat delectus a optio excepturi commodi,
              facere, temporibus molestias illum?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
              nobis repudiandae, repellat delectus a optio excepturi commodi,
              facere, temporibus molestias illum?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
              nobis repudiandae, repellat delectus a optio excepturi commodi,
              facere, temporibus molestias illum?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
              nobis repudiandae, repellat delectus a optio excepturi commodi,
              facere, temporibus molestias illum?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
              nobis repudiandae, repellat delectus a optio excepturi commodi,
              facere, temporibus molestias illum?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img
              src="https://images.pexels.com/photos/10632123/pexels-photo-10632123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
              nobis repudiandae, repellat delectus a optio excepturi commodi,
              facere, temporibus molestias illum?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        {/* <div ref={endRef}></div> */}
      </div>
    ):(
        <span>
            click on the user to start chatting
        </span>
    )}
    </>
  );
};

export default SingleChat;



















// <div className="center">
//       <div className="message">
//         <img src="./avatar.png" alt="" />
//         <div className="texts">
//           <p>
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui nobis
//             repudiandae, repellat delectus a optio excepturi commodi, facere,
//             temporibus molestias illum?
//           </p>
//           <span>1 min ago</span>
//         </div>
//       </div>
//       <div className="message own">
//         <div className="texts">
//           <p>
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui nobis
//             repudiandae, repellat delectus a optio excepturi commodi, facere,
//             temporibus molestias illum?
//           </p>
//           <span>1 min ago</span>
//         </div>
//       </div>
//       <div className="message">
//         <img src="./avatar.png" alt="" />
//         <div className="texts">
//           <p>
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui nobis
//             repudiandae, repellat delectus a optio excepturi commodi, facere,
//             temporibus molestias illum?
//           </p>
//           <span>1 min ago</span>
//         </div>
//       </div>
//       <div className="message own">
//         <div className="texts">
//           <p>
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui nobis
//             repudiandae, repellat delectus a optio excepturi commodi, facere,
//             temporibus molestias illum?
//           </p>
//           <span>1 min ago</span>
//         </div>
//       </div>
//       <div className="message">
//         <img src="./avatar.png" alt="" />
//         <div className="texts">
//           <p>
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui nobis
//             repudiandae, repellat delectus a optio excepturi commodi, facere,
//             temporibus molestias illum?
//           </p>
//           <span>1 min ago</span>
//         </div>
//       </div>
//       <div className="message own">
//         <div className="texts">
//           <img
//             src="https://images.pexels.com/photos/10632123/pexels-photo-10632123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//             alt=""
//           />
//           <p>
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui nobis
//             repudiandae, repellat delectus a optio excepturi commodi, facere,
//             temporibus molestias illum?
//           </p>
//           <span>1 min ago</span>
//         </div>
//       </div>
//       {/* <div ref={endRef}></div> */}
//     </div>