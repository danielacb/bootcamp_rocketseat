import { IconCopy } from "../Icons";

import "./room-code.scss";

type RoomCodeProps = {
  code: string;
};

export function RoomCode({ code }: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(code);
  }

  return (
    <button className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <IconCopy color="#f8f8f8" />
      </div>
      <span>Sala #{code}</span>
    </button>
  );
}
