import React, { useEffect, useState } from "react";
import "./detail.css";
import { ChatState } from "../Context/ChatProvider";
import { useNavigate } from "react-router-dom";
import ProfileModal from "../miscellaneous/SingleProfile/ProfileModal";
import UpdateGroupChatModal from "../miscellaneous/GroupProfile/UpdateGroupChatModal";
import { getSender, getSenderFull } from "../../config/ChatLogics";

const Detail = (props) => {
  const { getUserData, setUserData, selectedChat } = ChatState();
  const [user, setUser] = useState(getUserData());
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    setUserData(null);
    navigate("/auth");
  };
  ``;

  return (
    <div className="detail">
      <div className="user">
        {selectedChat &&
          (!selectedChat.isGroupChat ? (
            <>
              {/* {getSender(user, selectedChat.users)} */}
              <ProfileModal user={getSenderFull(user, selectedChat.users)} />
              {/* {<ProfileModal user = {getSenderFull(user, selectedChat.users, selectedChat.pic)} />} */}
              {/* {getSender(user, selectedChat.users)}
              <ProfileModal user={getSenderFull(user, selectedChat.users)} /> */}
            </>
          ) : (
            <>
              <UpdateGroupChatModal
                fetchAgain={props.fetchAgain}
                setFetchAgain={props.setFetchAgain}
              />
            </>
          ))}
        {/* pic need to be pushed during registration */}
        {/* <img src="/public/avatar.png" alt="" /> */}
        {/* <img src={user.pic} alt="" /> */}
        {/* <h2>Sender's name</h2> */}
        {/* <h2>{user.name}<h2> */}
        {/* <p>{user.email}</p> */}
        {/* <p>Lorem ipsum dolor sit amet.</p> */}
      </div>
      <div className="info"></div>
    </div>
  );
};

export default Detail;
