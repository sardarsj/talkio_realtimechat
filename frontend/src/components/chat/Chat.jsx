import EmojiPicker from "emoji-picker-react";
import "./chat.css";
import { ChatState } from "../Context/ChatProvider";
import { useEffect, useRef, useState } from "react";

const Chat = (props) => {
  const {showChatPage, setShowChatPage} = props;
  const { getUserData, setUserData } = ChatState();
  const [user, setUser] = useState(getUserData());


  useEffect(() => {
    const userData = getUserData();
    setUser(userData);
  }, []);

  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src={user.pic} alt="" />
          {/* <img src="./avatar.png" alt="" /> */}
          <div className="texts">
            <span>{user.name}</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" onClick={() => setShowChatPage(!showChatPage)}/>
        </div>
      </div>
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
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
