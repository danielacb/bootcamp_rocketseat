import { FormEvent, useState } from "react";
import { useParams } from "react-router";

import useAuth from "../hooks/useAuth";
import useRoom from "../hooks/useRoom";
import { database } from "../services/firebase";
import { Button } from "../components/Button/Button";
import { RoomCode } from "../components/RoomCode/RoomCode";
import { Question } from "../components/Question/Question";
import { IconLike } from "../components/Icons";

import logoImg from "../assets/images/logo.svg";

import "../styles/room.scss";

export function Room() {
  const { user } = useAuth();
  const { roomId } = useParams<{ roomId: string }>();
  const { questions, title } = useRoom(roomId);
  const [newQuestion, setNewQuestion] = useState("");

  async function handleSendQuestion(e: FormEvent) {
    e.preventDefault();
    if (newQuestion.trim() === "") return;
    if (!user) throw new Error("You must be logged in");

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    };

    await database.ref(`rooms/${roomId}/questions`).push(question);

    setNewQuestion("");
  }

  async function handleLikeQuestion(
    questionId: string,
    likeId: string | undefined
  ) {
    if (likeId) {
      await database
        .ref(`rooms/${roomId}/questions/${questionId}/likes/${likeId}`)
        .remove();
    } else {
      await database.ref(`rooms/${roomId}/questions/${questionId}/likes`).push({
        authorId: user?.id,
      });
    }
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <a href="/">
            <img src={logoImg} alt="Logo escrita Letmeask" />
          </a>
          <RoomCode code={roomId} />
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
        <form onSubmit={handleSendQuestion}>
          <textarea
            placeholder="O que você quer perguntar?"
            onChange={(e) => setNewQuestion(e.target.value)}
            value={newQuestion}
          />
          <div className="form-footer">
            {user ? (
              <div className="user-info">
                <img src={user.avatar} alt={user.name} />
                <span>{user.name}</span>
              </div>
            ) : (
              <span>
                Para enviar uma pergunta, <button>faça seu login.</button>
              </span>
            )}
            <Button type="submit" disabled={!user}>
              Enviar pergunta
            </Button>
          </div>
        </form>
        {questions.map((question) => (
          <Question
            key={question.id}
            content={question.content}
            author={question.author}
            isAnswered={question.isAnswered}
            isHighlighted={question.isHighlighted}
          >
            {!question.isAnswered && (
              <button
                className="like-button"
                type="button"
                aria-label="marcar como gostei"
                onClick={() => handleLikeQuestion(question.id, question.likeId)}
              >
                {question.likesCount > 0 && <span>{question.likesCount}</span>}
                <IconLike
                  color={question.likeId ? "#835afd" : "#737380"}
                  hoverColor={"#835afd"}
                />
              </button>
            )}
          </Question>
        ))}
      </main>
    </div>
  );
}
