"use client"
import axios, { AxiosError, AxiosResponse } from 'axios'
import jwtDecoder from "jwt-decode";
import Cookies from "universal-cookie";
import React, { useState, FC, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import "./SignIn.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//!interfaces
interface Decoded {
  username: string,
  password: string,
  role: string,
  profilepic: string
  exp: number,
}

//!----------------------
const Login: FC = () => {
  //!Successfully logged in
  const notify2 = () => toast.success("Successfully logged in")
  useEffect(() => {
    const logout = () => {
      let cookie = new Cookies()
      cookie.remove("jwt-token")
    }
    logout()
  }, [])
  //! error 
  const notify = (error: string) => toast.error(`${error}`.toLocaleUpperCase())
  //!router
  const router = useRouter()
  //! initialize cookies
  const cookies = new Cookies()
  //!logged user info
  const [user, setUser] = useState<object | null>(null)
  //!entered login info
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  //!login function
  const login = () => {
    axios.post("http://localhost:5000/client/login", { username, password })
      .then((res: AxiosResponse) => {
        if ((res.data) === "Wrong password") {
          notify(res.data)
        }
        console.log("res", res.data)
        if (res.data) {
          //!decoding token
          const decoded: Decoded = jwtDecoder(res.data)
          //!setting data to logged user
          setUser(decoded)
          //! setting data to cookie
          cookies.set("jwt-token", res.data, {
            expires: new Date(decoded.exp * 1000)

          })
          notify2()
          router.push("/UserProfile")
        }
      }).catch((err: AxiosError) => {
        if (err.response?.data === "Please check your email inbox to verify your account") {
          notify(err.response?.data)
        }

        if (err.response?.data === "user not found") {
          axios.post("http://localhost:5000/seller/login", { username, password })
            .then((res: AxiosResponse) => {
              if ((res.data) === "Wrong password") {
                notify(res.data)
              }
              console.log("data", res.data);
              if (res.data) {
                //!decoding token
                const decoded: Decoded = jwtDecoder(res.data)
                console.log("decoded", decoded);
                //!setting data to logged user
                setUser(decoded)
                //! setting data to cookie
                cookies.set("jwt-token", res.data, {
                  expires: new Date(decoded.exp * 1000)
                })
                notify2()
                router.push("/SellerProfile")
              }
            }).catch((err: AxiosError) => {
              if (err.response?.data === "user not found") {

                axios.post("http://localhost:5000/admin/login", { username, password })
                  .then((res: AxiosResponse) => {
                    if ((res.data) === "Wrong password") {
                      notify(res.data)
                    }
                    if (res.data) {
                      //!decoding token
                      const decoded: Decoded = jwtDecoder(res.data)
                      //!setting data to logged user
                      setUser(decoded)
                      //! setting data to cookie
                      cookies.set("jwt-token", res.data, {
                        expires: new Date(decoded.exp * 1000)
                      })
                      notify2()
                      router.push("/Dashboard")
                    }
                  }).catch((err: AxiosError) => {
                    //!user not found
                    notify(`${err.response?.data}`.toUpperCase())
                    console.log(err.response?.data)
                  })
              }
            })
        }
      })
  }
  return (
    <div>
      <div className="sign-in-si">
        <div className="sign-in-child-si" />
        <div className="rectangle-parent-si">
          <div className="group-child-si" />
          <b className="explore-the-world-si">Explore the world of BMW</b>
          <div style={{ textDecoration: "none" }}
            className="new-user-create-container-si"
            onClick={() => router.push("/SignUp")}
          >
            <span style={{ color: 'white' }}>New user?</span>
            <span className="create-an-account-si"> Create an account</span>
          </div>
          <div className="email-address-parent-si">
            <div className="group-si">
              <input type="text" required onChange={(e) => setUsername(e.target.value)} />
              <span className="highlight-si"></span>
              <span className="bar-si"></span>
              <label>Username</label>
            </div>
            <div className="group-si">
              <input type="password" required onChange={(e) => setPassword(e.target.value)} />
              <span className="highlight-si"></span>
              <span className="bar-si"></span>
              <label>Password</label>
            </div>
          </div>
        </div>
        <img className="image-8-icon-si" alt="" src="https://res.cloudinary.com/dhz4wb76m/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1689289934/bmw_logo_kp6bvt.jpg?_s=public-apps" />
        <div className="sign-in1-si">Sign In</div>
        <div className="continue-wrapper-si" onClick={() => {
          login()
        }}>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <div className="continue-si">Continue</div>
        </div>
      </div>
    </div>
  )
}

export default Login