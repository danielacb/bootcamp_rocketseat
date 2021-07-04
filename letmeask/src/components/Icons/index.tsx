import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  color: string;
  hoverColor?: string;
};

export function IconLike({ color, hoverColor, ...props }: IconProps) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className="icon-like"
    >
      <defs>
        <style>
          {`.icon-like{stroke:${color};} .icon-like:hover{stroke:${hoverColor}}}`}
        </style>
      </defs>
      <path
        d="M7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3m7-2V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a1.999 1.999 0 00-2-2.3H14z"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconDelete({ color, hoverColor, ...props }: IconProps) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className="icon-delete"
    >
      <defs>
        <style>
          {`.icon-delete{stroke:${color};} .icon-delete:hover{stroke:${hoverColor}}}`}
        </style>
      </defs>
      <path
        d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14z"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconHighlight({ color, hoverColor, ...props }: IconProps) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className="icon-highlight"
    >
      <defs>
        <style>
          {`.icon-highlight{stroke:${color};} .icon-highlight:hover{stroke:${hoverColor}}}`}
        </style>
      </defs>
      <path
        clipRule="evenodd"
        d="M12 18h6a3 3 0 003-3V7a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3h1.5v3l4.5-3z"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconCheck({ color, hoverColor, ...props }: IconProps) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className="icon-check"
    >
      <defs>
        <style>
          {`.icon-check{stroke:${color};} .icon-check:hover{stroke:${hoverColor}}}`}
        </style>
      </defs>
      <circle
        cx={12}
        cy={12}
        r={9.004}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.443 12.34l2.168 2.167-.014-.014 4.89-4.891"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconCopy({ color, hoverColor, ...props }: IconProps) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className="icon-copy"
    >
      <defs>
        <style>
          {`.icon-copy{stroke:${color};} .icon-copy:hover{stroke:${hoverColor}}}`}
        </style>
      </defs>
      <path
        d="M16.667 7.5h-7.5c-.92 0-1.667.746-1.667 1.667v7.5c0 .92.746 1.666 1.667 1.666h7.5c.92 0 1.666-.746 1.666-1.666v-7.5c0-.92-.746-1.667-1.666-1.667z"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.167 12.5h-.834a1.667 1.667 0 01-1.667-1.667v-7.5a1.667 1.667 0 011.667-1.666h7.5A1.667 1.667 0 0112.5 3.333v.834"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
