import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [regalos, setRegalos] = useState([
    "vitel tone",
    "ensalada rusa",
    "mantecol"
  ]);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const regalo = event.target.regalo.value;

    setRegalos((regalos) => regalos.concat(regalo));

    event.target.regalo.value = "";
  }

  return (
    <div className="App">
      <h1>Regalos:</h1>
      <form onSubmit={handleSubmit}>
        <input name="regalo" />
        <button type="submit">Agregar</button>
      </form>
      <ul>
        {regalos.map((regalo) => (
          <li key={regalo}>{regalo}</li>
        ))}
      </ul>
    </div>
  );
}
