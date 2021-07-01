import { useParams } from "react-router";

import useRoom from "../hooks/useRoom";
import { RoomCode } from "../components/RoomCode";
import { Question } from "../components/Question";
import { Button } from "../components/Button";
import { database } from "../services/firebase";

import logoImg from "../assets/images/logo.svg";
import deleteImg from "../assets/images/delete.svg";

import "../styles/room.scss";

export function AdminRoom() {
  const { roomId } = useParams<{ roomId: string }>();
  const { questions, title } = useRoom(roomId);

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm("Tem certeza que você deseja excluir esta pergunta?")) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

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
          >
            <button
              type="button"
              onClick={() => handleDeleteQuestion(question.id)}
            >
              <img src={deleteImg} alt="Remover Pergunta" />
            </button>
          </Question>
        ))}
      </main>
    </div>
  );
}
