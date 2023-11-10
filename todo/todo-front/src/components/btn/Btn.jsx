import React from "react";

export default function Btn({ content, type, className, fn }) {
  return (
    <button className={className} type={type} onClick={fn}>
      {content}
    </button>
  );
}
