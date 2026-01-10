// src/components/ChatRoom.jsx
import { useEffect, useRef, useState } from "react";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";
import styles from "./ChatRoom.module.css";
const API_BASE = import.meta.env.VITE_API_BASE_URL;

export default function ChatRoom({ roomId, user }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);
  const bottomRef = useRef(null);
  const clientRef = useRef(null);

    useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  // 입장
  useEffect(() => {
    if (!roomId) return;

    // 1) SockJS + STOMP 클라이언트 생성
    // 서버와 웹 소켓을 열 준비 (연결)
    const socket = new SockJS(`${API_BASE}/ws-chat`);
    console.log("웹소켓 연결 완료");
    // Sock JS를 이용한 STOMP 클라이언트 생성
    const client = new Client({
      webSocketFactory: () => socket,
      // debug: (str) => 
      //   console.log(str),
      reconnectDelay: 5000, // 연결 끊어지면 5초 후 재시도
      
      // 서버와 연결되면 onConnect 발생
      onConnect: () => {
        console.log("Stomp 클라이언트 생성 완료");
        // 2) 방 구독: /topic/room/{roomId}
        // 서버한테 “나 지금 이 방 메시지 보고 싶어요!” 라고 말함
        // /topic/room/${roomId} 으로 말하는 건 모두 들을 수 있음
        client.subscribe(`/topic/room/${roomId}`, (messageFrame) => {
          const body = JSON.parse(messageFrame.body);
          setMessages((prev) => [...prev, body]);
        });

        // 3) 입장 메시지 보내기 (선택)
        // 동시에 “나 들어왔어요!” 라는 입장 메시지(JOIN) 를 서버로 보냄
        // 서버에서 입장 메세지를 받아서 다시 모두에게 전달해줌
        client.publish({
          destination: `/app/chat/${roomId}`,
          body: JSON.stringify({
            type: "JOIN",
            roomId: roomId,
            sender: "📢",
            message: `${user?.name ?? "누군가"}님이 입장했습니다`,
            userId: user?.id ?? null,
          }),
        },
      );
      },
      // 연결 끊어지면 onStompError 발생
      onStompError: (frame) => {
        console.error("Broker reported error: " + frame.headers["message"]);
        console.error("Additional details: " + frame.body);
      },
    });

    // 서버와 연결 시작
    client.activate();
    clientRef.current = client;

    // cleanup
      return () => {
      const c = clientRef.current;
      if (!c) return;
      // 1) 연결이 실제로 되어 있는지 확인 후에만 LEAVE publish
      if (c.connected) {
        try {
          c.publish({
            destination: `/app/chat/${roomId}`,
            body: JSON.stringify({
              type: "LEAVE",
              roomId,
              sender: "📢",
              message: `${user?.name ?? "익명"}님이 퇴장했습니다`,
              userId: user?.id ?? null,
            }),
          });
        } catch (e) {
          console.warn("failed to send LEAVE", e);
        }
      }
      console.log("Stomp 클라이언트 연결 종료")
      //끊기
      if (c.active) {
        c.deactivate();
      }
    };
  }, [roomId, user]);


  const sendMessage = () => {
    // 4) 채팅 메시지 보내기
    if (!clientRef.current || !clientRef.current.connected || !input.trim()) {
      return;
    }

    // 입력한 메세지를 body에 담아 서버(/app/chat/${roomId})로 전달
    // 서버에서 받아서 다시 모두에게 전달 (subscribe)
    clientRef.current.publish({
      destination: `/app/chat/${roomId}`,
      body: JSON.stringify({
        type: "TALK",
        roomId: roomId, // 서버에서 무시하고 다시 세팅해도 상관 X
        sender: user?.name ?? "익명",
        message: input,
        userId: user?.id ?? null,
      }),
    });

    setInput("");
  };

  return (
    <div className={styles.container}>
      <h3>채팅방 #{roomId}</h3>
      <div className={styles.messages} ref={scrollRef}>
        {messages.map((m, idx) => (
          <div key={idx}>
            <b>{m.sender === "📢" ? "📢" : `[${m.sender}]`}</b> {m.message}
          </div>
        ))}
        <div ref={bottomRef}></div> 
      </div>
      <div className={styles.input} style={{ display: "flex", gap: "0.5rem" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="메시지를 입력하세요"
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
        />
        <button type="button" onClick={sendMessage}>
          보내기
        </button>
      </div>
    </div>
  );
}