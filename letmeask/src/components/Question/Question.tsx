import { ReactNode } from "react";
import "./question.scss";

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
};

export function Question({
  content,
  author,
  children,
  isAnswered,
  isHighlighted,
}: QuestionProps) {
  return (
    <div
      className={`question${isAnswered ? " answered" : ""}
      ${isHighlighted && !isAnswered ? " highlight" : ""}`}
    >
      <p dangerouslySetInnerHTML={{ __html: content }} />
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </div>
  );
}
