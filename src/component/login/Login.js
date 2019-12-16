import React, { Component } from "react";
import {
  user_logo,
  lock_logo,
  cbx_logo,
  fb_logo,
  gmail_logo,
  twitter_logo
} from "../../images";
import { styles } from "./Style.js";
import axios from "axios";
import { Link } from "react-router-dom";

const baseUrl = "http://192.168.23.6/mesin-kasir-api/";

class Login extends Component {
  componentDidMount() {
    axios({
      method: "post",
      url: baseUrl + "login",
      data: {
        username: "nico",
        password: "1234"
      }
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    document.body.style.backgroundImage =
      "url('https://www.wallpaperflare.com/static/306/130/551/glow-green-trees-aurora-borealis-wallpaper.jpg')";
    document.body.style.backgroundPosition = "center";

    return (
      <div>
        <div style={styles.logoContainer}>
          <img src={cbx_logo} style={{ width: 190, height: 190 }} />
          <p style={styles.title}> CBX MARKET</p>
        </div>

        <div style={styles.hintLogin}>
          <p style={styles.hintLoginText}>
            Enter your username and password to log on
          </p>
        </div>

        <div
          style={{
            marginRight: "auto",
            marginLeft: "auto",
            backgroundColor: "rgba(111, 154, 141, 0.7)",
            border: "1px solid #a0aaba",
            borderBottomRightRadius: 5,
            borderBottomLeftRadius: 5,
            width: 500,
            height: 300
          }}
        >
          <form
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "row"
            }}
          >
            <img
              src={user_logo}
              style={{
                height: 20,
                width: 20,
                display: "flex",
                flexDirection: "row",
                marginTop: 28,
                marginRight: 30,
                marginLeft: 50
              }}
            />
            <input
              type="text"
              placeholder="username..."
              style={{
                display: "flex",
                flexDirection: "column",
                flexFlow: "wrap",
                backgroundColor: "white",
                border: "1px solid #b7afbd",
                borderRadius: 5,
                fontSize: 15,
                fontFamily: "Roboto",
                textAlign: "center",
                marginTop: 17,
                width: 380,
                height: 35
              }}
            />
          </form>

          <form
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "row"
            }}
          >
            <img
              src={lock_logo}
              style={{
                height: 20,
                width: 20,
                display: "flex",
                marginTop: 28,
                marginRight: 30,
                marginLeft: 50
              }}
            />
            <input
              type="password"
              placeholder="password..."
              style={{
                display: "flex",
                backgroundColor: "white",
                border: "1px solid #b7afbd",
                borderRadius: 5,
                fontSize: 15,
                fontFamily: "Roboto",
                textAlign: "center",
                marginTop: 17,
                width: 380,
                height: 35
              }}
            />
          </form>
          <form
            style={{
              marginLeft: 100
            }}
          >
            <nav>
              <Link to="/home">
                <button
                  style={{
                    backgroundColor: "#4d80e4",
                    border: "1px solid",
                    borderRadius: 5,
                    fontSize: 15,
                    fontFamily: "Roboto",
                    textAlign: "center",
                    marginTop: 20,
                    width: 380,
                    height: 35,
                    color: "white"
                  }}
                >
                  Sign in
                </button>
              </Link>
            </nav>
          </form>

          <p
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: 50,
              color: "white",
              fontFamily: "Alatsi"
            }}
          >
            Stay connect with us
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            <img
              src={fb_logo}
              style={{
                width: 30,
                height: 30
              }}
            />
            <img
              src={twitter_logo}
              style={{
                marginLeft: 20,
                width: 30,
                height: 30
              }}
            />
            <img
              src={gmail_logo}
              style={{
                marginLeft: 20,
                width: 30,
                height: 30
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
