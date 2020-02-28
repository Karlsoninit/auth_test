import React, { useState, useCallback, useEffect } from "react";
import db from "../fbConfig";

export const SignOut = ({ history }) => {
  const [sendConfirm, setSendConfirm] = useState(false);

  const handleSubmit = useCallback(async event => {
    event.preventDefault();
    const { email } = event.target.elements;
    await db.auth().sendSignInLinkToEmail(email.value, {
      url: "http://localhost:3000/register",
      handleCodeInApp: true
    });
    setSendConfirm(true);

    localStorage.setItem("emailForSignIn", email.value);
  }, []);

  const confirmInWithLink = async () => {
    if (db.auth().isSignInWithEmailLink(history.location.search)) {
      const email = localStorage.getItem("emailForSignIn");
      await db.auth().signInWithEmailLink(email, history.location.search);
      localStorage.removeItem("emailForSignIn");
      console.log("story", history.location.search);
    }
  };

  useEffect(() => {
    confirmInWithLink();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" />
        <button type="submit">register</button>
      </form>
      {sendConfirm && (
        <h2>
          your confirm code you can find in your
          {localStorage.getItem("emailForSignIn")}
        </h2>
      )}
    </>
  );
};
