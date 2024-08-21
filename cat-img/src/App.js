import { useContext, useEffect, useState } from "react";
import "./App.css";
import { CatImageContext } from "./context/CatImageContext";

function App() {
  const {catImageUrl, loadCatImage, error} = useContext(CatImageContext);

  return (
    <div className="App">
      <h1>Random cat image</h1>
      {catImageUrl ? <img src={catImageUrl} alt="A random cat" style={{ width: "300px" }} /> : <p>loading...</p>}
      <div>
        <button onClick={loadCatImage}>more</button>
      </div>
    </div>
  );
}

export default App;
