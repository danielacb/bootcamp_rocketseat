import { useParams } from "react-router";

import useRoom from "../hooks/useRoom";
import { RoomCode } from "../components/RoomCode";
import { Question } from "../components/Question";
import { Button } from "../components/Button";

import logoImg from "../assets/images/logo.svg";

import "../styles/room.scss";

export function AdminRoom() {
  const { roomId } = useParams<{ roomId: string }>();
  const { questions, title } = useRoom(roomId);

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <a href="/">
            <img src={logoImg} alt="Logo escrita Letmeask" />
          </a>
          <div>
            <RoomCode code={roomId} />
            <Button variant="secondary" small>
              Encerrar sala
            </Button>
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && (
            <span>
              {questions.length}{" "}
              {questions.length === 1 ? "pergunta" : "perguntas"}
            </span>
          )}
        </div>
        {questions.map((question) => (
          <Question
            key={question.id}
            content={question.content}
            author={question.author}
          />
        ))}
      </main>
    </div>
  );
}
