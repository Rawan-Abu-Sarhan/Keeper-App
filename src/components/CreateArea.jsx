import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value
    }));
  };

  const handleAdd = (event) => {
    event.preventDefault(); 
    if (note.title && note.content) {
      props.onAdd(note); 
      setNote({ title: "", content: "" }); 
    }
  };

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
          onChange={handleChange}
        />
        <button onClick={handleAdd} disabled={!note.title || !note.content}>
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;