import { React, useState } from "react";

export const Saver = ({ onSave }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <div className="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Set Snippet name
        </label>
        <input
          type="email"
          className="form-control"
          placeholder="Snippet name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          rows="1"
          placeholder="Add Your Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="col-12">
        <button
          className="btn btn-primary"
          type="submit"
          onClick={() => onSave()}
        >
          SAVE
        </button>
      </div>
    </>
  );
};
