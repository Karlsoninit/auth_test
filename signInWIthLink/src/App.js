import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useRouter } from "./router";
import app from "./fbConfig";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    app.auth().onAuthStateChanged(setCurrentUser);
  }, [currentUser]);
  console.log(currentUser);
  const routing = useRouter(currentUser);
  return <Router>{routing}</Router>;
}

export default App;
