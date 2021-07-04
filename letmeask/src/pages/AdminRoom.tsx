import { useHistory } from "react-router-dom";
import { useParams } from "react-router";

import useRoom from "../hooks/useRoom";
import { RoomCode } from "../components/RoomCode/RoomCode";
import { Question } from "../components/Question/Question";
import { Button } from "../components/Button/Button";
import { database } from "../services/firebase";

import logoImg from "../assets/images/logo.svg";
import deleteImg from "../assets/images/delete.svg";
import checkImg from "../assets/images/check.svg";
import answerImg from "../assets/images/answer.svg";

import "../styles/room.scss";

export function AdminRoom() {
  const history = useHistory();
  const { roomId } = useParams<{ roomId: string }>();
  const { questions, title } = useRoom(roomId);

  async function handleCloseRoom() {
    await database.ref(`rooms/${roomId}`).update({
      closedAt: new Date(),
    });

    history.push("/");
  }

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm("Tem certeza que você deseja excluir esta pergunta?")) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  async function handleAnsweredQuestion(
    questionId: string,
    isAnswered: boolean
  ) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: !isAnswered,
    });
  }

  async function handleHighlightedQuestion(
    questionId: string,
    isHighlighted: boolean
  ) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: !isHighlighted,
    });
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
            <Button variant="secondary" small onClick={handleCloseRoom}>
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
            isAnswered={question.isAnswered}
            isHighlighted={question.isHighlighted}
          >
            <button
              type="button"
              onClick={() =>
                handleAnsweredQuestion(question.id, question.isAnswered)
              }
            >
              <img src={checkImg} alt="Marcar pergunta como respondida" />
            </button>
            {!question.isAnswered && (
              <button
                type="button"
                onClick={() =>
                  handleHighlightedQuestion(question.id, question.isHighlighted)
                }
              >
                <img src={answerImg} alt="Responder pergunta" />
              </button>
            )}
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
