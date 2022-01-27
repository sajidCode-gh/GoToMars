import React, { useEffect, useState } from "react";
import "./follow-cursor.css";

const FollowCursor = () => {
  const [cursorMove, SetCursorMove] = useState({ x: 0, y: 0 });
  useEffect(() => {
    document.onmousemove = (e) => {
      SetCursorMove({
        x: e.pageX,
        y: e.pageY,
      });
    };
  }, [cursorMove]);

  return (
    <div
      className="cursor"
      style={{ left: cursorMove.x + 20, top: cursorMove.y + 20 }}
    >
      <div className="cursor-circle"></div>
    </div>
  );
};

export default FollowCursor;
