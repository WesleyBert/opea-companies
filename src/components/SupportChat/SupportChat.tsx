import React, { useState } from "react";
import styles from "./SupportChat.module.scss";
import { MdContactSupport } from "react-icons/md";
import ResponseIA from "../../services/chatApi";

export const SupportChat: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Olá! Sou assistente do projeto. Fique à vontade para tirar suas dúvidas.",
    },
  ]);
  const [input, setInput] = useState("");

  async function handleSend() {
    if (!input.trim() || loading) return;
    setMessages([...messages, { from: "user", text: input }]);
    const userMsg = input;
    setInput("");
    setLoading(true);
    const botReply = await ResponseIA(userMsg);
    setMessages((msgs) => [
      ...msgs,
      {
        from: "bot",
        text: botReply || "Desculpe, não consegui entender sua mensagem.",
      },
    ]);
    setLoading(false);
  }

  return (
    <div className={`${styles.chatContainer} ${open ? styles.open : ""}`}>
      {open ? (
        <div className={styles.chatBox}>
          <div className={styles.header}>
            Suporte
            <button onClick={() => setOpen(false)}>×</button>
          </div>
          <div className={styles.messages}>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={msg.from === "user" ? styles.userMsg : styles.botMsg}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className={styles.botMsg}>
                <i>O bot está digitando...</i>
              </div>
            )}
          </div>
          <div className={styles.inputArea}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua dúvida..."
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              disabled={loading}
            />
            <button className={styles.button} onClick={handleSend}>
              {loading ? "Enviando" : "Enviar"}
            </button>
          </div>
        </div>
      ) : (
        <button className={styles.fab} onClick={() => setOpen(true)}>
          <MdContactSupport />
        </button>
      )}
    </div>
  );
};
