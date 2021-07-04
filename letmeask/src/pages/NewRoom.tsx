import { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import { database } from "../services/firebase";
import { Button } from "../components/Button/Button";

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";

import "../styles/auth.scss";

export function NewRoom() {
  const history = useHistory();
  const { user } = useAuth();
  const [newRoom, setNewRoom] = useState("");

  async function handleCreateRoom(e: FormEvent) {
    e.preventDefault();

    if (newRoom.trim() === "") return;

    const roomRef = database.ref("rooms");

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    history.push(`/rooms/${firebaseRoom.key}`);
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
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={(e) => setNewRoom(e.target.value)}
              value={newRoom}
            />
            <Button type="submit">Criar sala</Button>
          </form>
          <span>
            Quer entrar em uma sala já existente?{" "}
            <Link to="/">Clique aqui</Link>
          </span>
        </div>
      </main>
    </div>
  );
}
