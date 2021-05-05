import React, { useState } from "react";

function CreateArea(props) {
  const [textInput, setTextInput] = useState({
    title: "",
    content: ""
  });
  function textHandle(event) {
    const { name, value } = event.target;
    // console.log(value);
    setTextInput((prevVal) => {
      return {
        ...prevVal,
        [name]: value
      };
    });
  }
  function submitNote(event) {
    event.preventDefault();
    props.onAdd(textInput);
    setTextInput({
      title: "",
      content: ""
    });
  }
  return (
    <div>
      <form>
        <input
          onChange={textHandle}
          name="title"
          placeholder="Title"
          value={textInput.title}
        />
        <textarea
          onChange={textHandle}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={textInput.content}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
