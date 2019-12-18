import React, { Component } from 'react';
import user_logo from '../images/man-user.png';
import lock_logo from '../images/lock.png';
import call_logo from '../images/call.png';
import email_logo from '../images/email.png';
import cbx_logo from '../images/cbx.png';
import fb_logo from '../images/facebook.png';
import gmail_logo from '../images/gmail.png';
import twitter_logo from '../images/twitter.png';


class Login extends Component {
    render() {

        document.body.style.backgroundImage = "url('https://www.wallpaperflare.com/static/306/130/551/glow-green-trees-aurora-borealis-wallpaper.jpg')";
        document.body.style.backgroundPosition = "center";

        return (
            <div>
                <div style={{
                    display: 'flex',
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <img src={cbx_logo} style={{ width: 190, height: 190 }} />
                    <p style={{ fontFamily: 'Anton', fontSize: 40, color: '#272343' }}>CBX MARKET</p>

                </div>

                <div style={{
                    display: 'flex',
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    marginTop: 10,
                    justifyContent: 'space-around',
                    backgroundColor: 'rgba(178, 34, 34, 0.7)',
                    color: '#fffdf9',
                    width: 500,
                    height: 60,
                    fontSize: 20,
                    border: '1px solid #a0aaba',
                    borderTopRightRadius: 5,
                    borderTopLeftRadius: 5
                }}>
                    <p style={{
                        marginTop: 10,
                        fontFamily: 'Alatsi',
                        opacity: 10
                    }}>Enter your username and password to log on</p>
                </div>

                <div style={{
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    backgroundColor: 'rgba(111, 154, 141, 0.7)',
                    border: '1px solid #a0aaba',
                    borderBottomRightRadius: 5,
                    borderBottomLeftRadius: 5,
                    width: 500,
                    height: 300,
                }}>
                    <form style={{
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'row',

                    }}>
                        <img src={user_logo} style={{
                            height: 20,
                            width: 20,
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 28,
                            marginRight: 30,
                            marginLeft: 50
                        }} />
                        <input type="text" placeholder="username..."
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                flexFlow: 'wrap',
                                backgroundColor: 'white',
                                border: '1px solid #b7afbd',
                                borderRadius: 5,
                                fontSize: 15,
                                fontFamily: 'Roboto',
                                textAlign: 'center',
                                marginTop: 17,
                                width: 380,
                                height: 35,
                            }} />
                    </form>

                    <form style={{
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'row',
                    }}>
                        <img src={lock_logo} style={{
                            height: 20,
                            width: 20,
                            display: 'flex',
                            marginTop: 28,
                            marginRight: 30,
                            marginLeft: 50
                        }} />
                        <input type="password" placeholder="password..."
                            style={{
                                display: 'flex',
                                backgroundColor: 'white',
                                border: '1px solid #b7afbd',
                                borderRadius: 5,
                                fontSize: 15,
                                fontFamily: 'Roboto',
                                textAlign: 'center',
                                marginTop: 17,
                                width: 380,
                                height: 35,
                            }} />
                    </form>
                    <form style={{
                        marginLeft: 100
                    }}>
                        <button
                            style={{
                                backgroundColor: '#4d80e4',
                                border: '1px solid',
                                borderRadius: 5,
                                fontSize: 15,
                                fontFamily: 'Roboto',
                                textAlign: 'center',
                                marginTop: 20,
                                width: 380,
                                height: 35,
                                color: 'white',
                            }} >
                            Sign in
            </button>
                    </form>

                    <p style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginTop: 50,
                        color: 'white',
                        fontFamily: 'Alatsi'
                    }}>
                        Stay connect with us
          </p>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center'
                    }}>
                        <img src={fb_logo} style={{
                            width: 30,
                            height: 30,
                        }} />
                        <img src={twitter_logo} style={{
                            marginLeft: 20,
                            width: 30,
                            height: 30,
                        }} />
                        <img src={gmail_logo} style={{
                            marginLeft: 20,
                            width: 30,
                            height: 30,
                        }} />
                    </div>

                </div>
            </div>
        );
    }
}

export default Login;