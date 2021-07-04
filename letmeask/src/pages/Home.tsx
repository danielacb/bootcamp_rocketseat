import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import { database } from "../services/firebase";
import { Button } from "../components/Button/Button";

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";

import "../styles/auth.scss";

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();
  const [roomId, setRoomId] = useState("");

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push("/rooms/new");
  }

  async function handleJoinNewRoom(e: FormEvent) {
    e.preventDefault();

    if (roomId.trim() === "") return;

    const roomRef = await database.ref(`rooms/${roomId}`).get();

    if (!roomRef.exists()) {
      alert("Room does not exists");
      return;
    }

    if (roomRef.val().closedAt) {
      alert("Room already closed");
      return;
    }

    history.push(`/rooms/${roomId}`);
  }

  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Toda pergunta tem uma resposta.</strong>
        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Logo escrita Letmeask" />
          <button className="create-room" onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <span className="separator">ou entre em uma sala</span>
          <form onSubmit={handleJoinNewRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={(e) => setRoomId(e.target.value)}
              value={roomId}
            />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
