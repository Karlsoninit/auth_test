import React, { useEffect, useState } from "react";

import db from "../fbConfig";

export const Home = () => {
  const [hasEntered, setHasEntered] = useState(false);

  const getAllUsersInCollection = async () => {
    await db
      .firestore()
      .collection("guides")
      .get();
    setHasEntered(true);
  };
  useEffect(() => {
    getAllUsersInCollection();
  }, []);
  return (
    <>
      <h2>home</h2>
      {hasEntered && <h2>greate !!! you can registration with link :)</h2>}
      <button onClick={() => db.auth().signOut()}>Sign out</button>
    </>
  );
};
