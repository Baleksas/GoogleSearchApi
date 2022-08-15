import React, { useEffect, useState } from "react";

function App() {
  const search_text = "Love";
  const [songs, setSongs] = useState(null);

  useEffect(() => {
    console.log(songs);
  }, []);

  if (!songs) return null;

  return <div className="App"></div>;
}

export default App;
