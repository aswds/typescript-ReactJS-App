import React, { useState, useRef } from "react";

type Props = {};

const EventsExample = (props: Props) => {
  const [value, setValue] = useState<string>();
  const [isDrag, setIsDrag] = useState<boolean>();
  const inputRef = useRef<HTMLInputElement>(null);
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value);
  };
  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("Drag");
  };

  const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  };
  const leaverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };
  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
    console.log("DROP");
  };
  return (
    <div>
      <input type={"text"} onChange={changeHandler} placeholder="Controlable" />
      <input
        ref={inputRef}
        type={"text"}
        onChange={changeHandler}
        placeholder="Uncontrolable"
      />
      <button onClick={clickHandler}>Show value</button>
      <div
        onDrag={dragHandler}
        draggable
        style={{ height: "200px", width: "200px", backgroundColor: "red" }}
      ></div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaverHandler}
        onDragOver={dragWithPreventHandler}
        style={{
          height: "200px",
          width: "200px",
          marginTop: 20,
          backgroundColor: isDrag ? "blue" : "red",
        }}
      ></div>
    </div>
  );
};

export default EventsExample;
