import { useEffect, useState } from "react";
import "./App.css";
import useAPI, { TYPES } from "./hooks/useAPI";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [data, handleOperation] = useAPI();

  useEffect(() => {
    console.log("Data", data);
  }, [data]);

  const handleCreate = () => {
    console.log(title);
    console.log(content);
    const payload = {
      title,
      content,
    };
    handleOperation(TYPES.CREATE, payload);
  };
  const handleUpdate = (id) => {
    const payload = {
      id,
      updatedData: {
        title,
        content,
      },
    };
    handleOperation(TYPES.UPDATE, payload);
  };

  const handleDelete = (id) => {
    const payload = {
      id,
    };
    handleOperation(TYPES.DELETE, payload);
  };

  return (
    <div className="App">
      <h2>React Custom Hook for TODO</h2>
      <input
        type={"text"}
        placeholder="Enter Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type={"text"}
        placeholder="Enter Content"
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleCreate}>Create</button>
      <br />
      <br />
      <h3>Data</h3>
      {data.map((dt) => {
        return (
          <>
            <div
              style={{
                padding: "8px",
                background: "#eeeeee",
                display: "inline-block",
                margin: "2px",
              }}
            >
              ID: {dt.id} , Title: {dt.title} , Content: {dt.content}{" "}
              <button onClick={handleUpdate.bind(null,dt.id)}>Update</button>{" "}
              <button onClick={handleDelete.bind(null,dt.id)}>Delete</button>
            </div>
            <br />
          </>
        );
      })}
    </div>
  );
}

export default App;
