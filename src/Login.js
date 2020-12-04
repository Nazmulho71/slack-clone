import React from "react";
import Button from "@material-ui/core/Button";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import "./Login.css";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <div></div>
        <img
          src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png"
          alt=""
        />
        <h1 className="h">Sign In to the Slack Clone</h1>
        <p className="p">The best way to communicate</p>
        <Button onClick={signIn}>
          <img
            className="google"
            src="https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip"
            alt=""
          />
          <p className="signInText">Sign In with Google</p>
        </Button>
      </div>
    </div>
  );
}

export default Login;
