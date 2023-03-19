import React, { useState } from "react";
import { FiInfo } from "react-icons/fi";

export function Input(props) {
  return (
    <div className="inside-input">
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={props.className}
        id={props.id}
        ref={props.reference}
      />
    </div>
  );
}
